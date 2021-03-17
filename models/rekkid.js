const mongoose = require('mongoose');
const user = require('./user')
const Schema = mongoose.Schema;


const rekkidSchema = new mongoose.Schema({
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
        type: Number,
        default:null
    },

    artist: {
        type: String 
    },

    yearPurchased: {
        type: Number
    }
});

module.exports = mongoose.model('Rekkid', rekkidSchema)