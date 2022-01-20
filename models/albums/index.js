const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: { title: String, required: true },
  artist: { name: String, required: true },
  media: { type: String, required: true },
});

module.exports = mongoose.model("albumSchema", albumSchema);
