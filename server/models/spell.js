const { Schema, model } = require('mongoose');

const spellSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    }
})

const Spell = model("Spell", spellSchema)

module.exports = Spell