// The controller does the C R U D for the DB

const Country = require("../models/country");

// READ ALL
module.exports.findAllCountries = (req, res) => {
  Country.find()

    .then((countries) => {
      res.json(countries);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOneCountry = (req, res) => {
  Country.findOne({ _id: req.params.id })
    .then((oneCountry) => {
      res.json(oneCountry);
    })
    .catch((err) => res.json(err));
};

// CREATE

module.exports.createNewCountry = (req, res) => {
  Country.create(req.body)
    .then((newlyCreatedCountry) => {
      res.json(newlyCreatedCountry);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE

module.exports.updateExisitingCountry = (req, res) => {
  Country.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedCountry) => {
      res.json(updatedCountry);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteOneCountry = (req, res) => {
  Country.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};