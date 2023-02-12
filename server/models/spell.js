const { Schema, model } = require('mongoose');

const spellSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    cost: {
        type: Number,
    }
})

const Spell = model("Spell", spellSchema)

module.exports = Spell