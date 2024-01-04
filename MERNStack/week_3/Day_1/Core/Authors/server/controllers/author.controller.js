// The controller does the C R U D for the DB

const Author = require("../models/author");

// READ ALL
module.exports.findAllAuthors = (req, res) => {
  Author.find().sort( { name: 1 } )

    .then((products) => {
      res.json(products);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneAuthor) => {
      res.json(oneAuthor);
    })
    .catch((err) => res.json(err));
};

// CREATE

module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then((newlyCreatedProduct) => {
      res.json(newlyCreatedProduct);
    })
    .catch((err) => res.status(400).json(err));
};

// UPDATE

module.exports.updateExisitingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((err) => res.status(400).json(err));
};

// DELETE
module.exports.deleteOneAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.json(err));
};