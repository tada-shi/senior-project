const mongoose = require("mongoose");

const counsellors__Schema =  mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    license: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: false
    },
    contact: {
        type: String,
        required: true
    },
    charge: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model("counsellors__list", counsellors__Schema);