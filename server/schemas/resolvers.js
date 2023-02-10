const { AuthenticationError } = require('apollo-server-express');
const { Wizard, Card, Spell } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    wizards: async () => {
      return Wizard.find();
    },

    wizard: async (parent, { wizardId }) => {
      return Wizard.findOne({ _id: wizardId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Wizard.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addWizard: async (parent, { name, email, password }) => {
      const wizard = await Wizard.create({ name, email, password });
      const token = signToken(wizard);

      return { token, wizard };
    },
    login: async (parent, { email, password }) => {
      const wizard = await Wizard.findOne({ email });

      if (!wizard) {
        throw new AuthenticationError('No wizard with this email found!');
      }

      const correctPw = await wizard.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(wizard);
      return { token, wizard };
    },

    // Add a third argument to the resolver to access data in our `context`
    addSpell: async (parent, { wizardId, spell }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Wizard.findOneAndUpdate(
          { _id: wizardId },
          {
            $addToSet: { spells: spell },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },

    // Set up mutation so a logged in user can only remove their wizard and no one else's
    removeWizard: async (parent, args, context) => {
      if (context.user) {
        return Wizard.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // Make it so a logged in user can only remove a spell from their own wizard
    removeSpell: async (parent, { spell }, context) => {
      if (context.user) {
        return Wizard.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { spells: spell } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
