const Music = require("../models/albums");

//@Desc Get music
//@route GET /api/music
//@access Private
const getMusic = (req, res) => {
  res.status(200).json({ message: "get listening" });
};

//@Desc Add music
//@route POST /api/music
//@access Private
const addMusic = (req, res) => {
  res.status(200).json({ message: "added music" });
};

//@Desc Update music
//@route PUT /api/music/:id
//@access Private
const updateMusic = (req, res) => {
  res.status(200).json({ message: `added music ${req.params.id}` });
};

//@Desc Delete music
//@route DELETE /api/music/:id
//@access Private
const deleteMusic = (req, res) => {
  res.status(200).json({ message: `Delete music ${req.params.id}` });
};

module.exports = {
  getMusic,
  addMusic,
  updateMusic,
  deleteMusic,
};
