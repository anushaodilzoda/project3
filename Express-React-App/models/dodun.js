
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  type: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  },

  like: {
    type: Number,
    default: 0
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const Dodun = mongoose.model("Dodun", dataSchema);

module.exports = Dodun;
