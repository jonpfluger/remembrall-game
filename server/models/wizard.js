const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const wizardSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  score: {
    type: Number
  },
  spells: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Spell'
    }
  ],
});

// set up pre-save middleware to create password
wizardSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
wizardSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Wizard = model('Wizard', wizardSchema);

module.exports = Wizard