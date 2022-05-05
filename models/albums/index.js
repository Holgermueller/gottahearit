const mongoose = require("mongoose");
const { Schema } = mongoose;

const albumSchema = new Schema({
  title: String,
  artist: String,
  type: String,
  albumComments: String,
  userId: String,
});

module.exports = mongoose.model("albumSchema", albumSchema);
