const db = require('../config/connection');
const { Wizard, Card, Spell } = require('../models');
const wizardSeeds = require('./wizardSeeds.json');
const spellSeeds = require('./spellSeeds.json')

db.once('open', async () => {
  try {
    await Wizard.deleteMany({});
    await Wizard.create(wizardSeeds);
    await Spell.deleteMany({});
    await Spell.create(spellSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
