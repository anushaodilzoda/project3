const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  question: {
    type: String,
    required: true
  },

  answer: {
    type: String,
    required: true
  },

  like: {
    type: Number,
    default: 0
  },
  
  user: {
    type: String,
    required: true
  },

  formattedDate: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const Answer = mongoose.model("Answer", dataSchema);

module.exports = Answer;
