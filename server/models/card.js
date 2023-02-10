const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    front_image: {
        type: String,
    },
    back_image: {
        type: String,
    }
})

const Card = model('Card', cardSchema);

module.exports = Card;