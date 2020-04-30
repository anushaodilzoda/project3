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

  answer: {
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

const Question = mongoose.model("Question", dataSchema);

module.exports = Question;
