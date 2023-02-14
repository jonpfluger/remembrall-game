const { AuthenticationError } = require('apollo-server-express');
const { Wizard, Card, Spell } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    wizards: async () => {
      return Wizard.find().populate('spells');
    },

    wizard: async (parent, { wizardId }) => {
      return Wizard.findOne({ _id: wizardId }).populate('spells');
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Wizard.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    spells: async () => {
      return Spell.find();
    },
    spell: async (parent, { name }) => {
      return Spell.findOne({ name });
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
    addSpell: async (parent, { wizardId, name }, context) => {
        const spell = await Spell.findOne({name})
       
        const wizard = await Wizard.findOneAndUpdate(
          { _id: wizardId },
          {
            $push: { spells: spell._id },
          },
          {
            new: true,
          }
        ).populate('spells');
        
        return wizard
    },
    removeSpell: async (parent, { name }, context) => {
      if (context.user) {
        return Wizard.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { spells: name } },
          { new: true }
        );
      }
    },
  },
};

module.exports = resolvers;
