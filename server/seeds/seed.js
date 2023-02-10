const db = require('../config/connection');
const { Wizard, Card, Spell } = require('../models');
const wizardSeeds = require('./wizardSeeds.json');

db.once('open', async () => {
  try {
    await Wizard.deleteMany({});
    await Wizard.create(wizardSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
