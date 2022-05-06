const Music = require("../models/albums");

module.exports = {
  getAllMusic: (req, res) => {
    Music.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  addMusic: (req, res) => {
    const newMusic = req.body;
    Music.create(newMusic)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findMusicById: (req, res) => {
    Music.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  editMusicInfo: (req, res) => {
    Music.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      { upsert: true }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  deleteMusic: (req, res) => {
    Music.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
