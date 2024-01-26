// The controller does the C R U D for the DB

const Players = require("../models/team-manager");

// READ ALL
module.exports.findAllPlayers = (req, res) => {
  Players.find()

    .then((players) => {
      res.json(players);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOnePlayer = (req, res) => {
  Players.findOne({ _id: req.params.id })
    .then((onePlayer) => {
      res.json(onePlayer);
    })
    .catch((err) => res.json(err));
};

// CREATE

module.exports.createNewPlayer = (req, res) => {
  Players.create(req.body)
    .then((newlyCreatedPlayer) => {
      res.json(newlyCreatedPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE

module.exports.updateExisitingPlayer = (req, res) => {
  Players.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPlayer) => {
      res.json(updatedPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteOnePlayer = (req, res) => {
  Players.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};