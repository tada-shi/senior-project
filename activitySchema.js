const mongoose = require("mongoose");

const activity__Schema =  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    charge: {
        type: Number,
        required: false
    },
    rating:{
        type: Number,
        required: false,
        default: 3
    }
});

module.exports = mongoose.model("activities__list", activity__Schema);