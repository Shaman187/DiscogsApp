const mongoose = require('mongoose');
const user = require('./user')
const Schema = mongoose.Schema;


const commentsSchema = new mongoose.Schema({
  content: String,
  user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
});


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
    },

    comments: [commentsSchema],
});

module.exports = mongoose.model('Rekkid', rekkidSchema)