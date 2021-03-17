const mongoose = require('mongoose');

// Create your User Model
const rekkidSchema = new mongoose.Schema({
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

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    records: [rekkidSchema]
  });
  
  module.exports = mongoose.model('User', userSchema);