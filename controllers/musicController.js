const Music = require("../models/albums");

module.exports = {
  getAllMusic: (req, res) => {
    Music.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  addMusic: (req, res) => {
    const newMusic = {};
    Music.create(newMusic)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findMusicById: (req, res) => {},

  editMusicInfo: (req, res) => {},

  deleteMusic: (req, res) => {
    Music.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
