const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  topic: {
    type: String,
    required: true
  },

  user: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
