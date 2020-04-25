const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  topic: {
    type: String,
    required: true
  },

  question: {
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

const Question = mongoose.model("Question", dataSchema);

module.exports = Question;
