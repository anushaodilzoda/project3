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

  user: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  }
});

const Answer = mongoose.model("Answer", dataSchema);

module.exports = Answer;
