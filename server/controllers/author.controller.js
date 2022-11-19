const { Author } = require("../models/author.model");

//get all
module.exports.list = (request, response) => {
  Author.find({})
    .then((authors) => {
      response.json(authors);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
};

//get one
module.exports.getOne = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.json(err));
};

//update
module.exports.update = (request, response) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updated) => response.json(updated))
    .catch((err) => response.json(err));
};

//get one and create
module.exports.create = (request, response) => {
  const { firstName, lastName } = request.body;
  Author.create({
    firstName,
    lastName,
  })
    .then((author) => response.json(author))
    .catch((err) =>
      response.json({ message: "something went wrong", error: err })
    );
};

//delete
module.exports.delete = (req, res) => {
  Author.findOneAndDelete({ _id: req.params.id })
    .then((deleted) => res.json(deleted))
    .catch((err) => res.status(400).json(err));
};
