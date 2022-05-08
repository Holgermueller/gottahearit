const asyncHandler = require("express-async-handler");

const Music = require("../models/albums");

//@Desc Get music
//@route GET /api/music
//@access Private
const getMusic = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get listening" });
});

//@Desc Add music
//@route POST /api/music
//@access Private
const addMusic = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add something");
  }

  res.status(200).json({ message: "added music" });
});

//@Desc Update music
//@route PUT /api/music/:id
//@access Private
const updateMusic = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `added music ${req.params.id}` });
});

//@Desc Delete music
//@route DELETE /api/music/:id
//@access Private
const deleteMusic = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete music ${req.params.id}` });
});

module.exports = {
  getMusic,
  addMusic,
  updateMusic,
  deleteMusic,
};
