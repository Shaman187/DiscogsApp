const mongoose = require('mongoose');
const user = require('./user')
const Schema = mongoose.Schema;


const rekkidSchema = new mongoose.Schema({
    text: String,

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    title: {
      type: String
    },

    label: {
      type: String
    },

    yearReleased: {
        type: Number
    },

    artist: {
        type: String 
    },

    yearPurchased: {
        type: Number
    }
});

module.exports = mongoose.model('Rekkid', rekkidSchema)