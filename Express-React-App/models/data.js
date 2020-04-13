const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new mongoose.Schema({
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
    type: Date,
    required: true
  }
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
