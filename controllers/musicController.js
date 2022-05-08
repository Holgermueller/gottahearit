const asyncHandler = require("express-async-handler");
const { update } = require("../models/music");

const Music = require("../models/music");

//@Desc Get music
//@route GET /api/music
//@access Private
const getMusic = asyncHandler(async (req, res) => {
  const music = await Music.find();

  res.status(200).json(music);
});

//@Desc Add music
//@route POST /api/music
//@access Private
const addMusic = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add something");
  }

  const newMusic = await Music.create({
    title: req.body.title,
  });

  res.status(200).json(newMusic);
});

//@Desc Update music
//@route PUT /api/music/:id
//@access Private
const updateMusic = asyncHandler(async (req, res) => {
  const music = await Music.findById(req.params.id);

  if (!music) {
    res.status(400);
    throw new Error("Music not found");
  }

  const updatedMusic = await Music.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedMusic);
});

//@Desc Delete music
//@route DELETE /api/music/:id
//@access Private
const deleteMusic = asyncHandler(async (req, res) => {
  const music = await Music.findById(req.params.id);

  if (!music) {
    res.status(400);
    throw new Error("Music not found");
  }

  await music.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMusic,
  addMusic,
  updateMusic,
  deleteMusic,
};
