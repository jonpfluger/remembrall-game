const { Schema, model } = require('mongoose');

const spellSchema = new Schema({
    spellId: Number,
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    cost: {
        type: Number,
    }
})

const Spell = model("Spell", spellSchema)

module.exports = Spell