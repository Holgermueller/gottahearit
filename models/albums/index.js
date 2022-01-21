const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  media: { type: String, required: true },
  heardIt: { type: Boolean, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model("albumSchema", albumSchema);
