const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
  app.get("/api/authors/", AuthorController.list);
  app.get("/api/authors/:id", AuthorController.getOne);
  app.put("/api/authors/:id", AuthorController.update);
  app.delete("/api/authors/:id", AuthorController.delete);
  app.post("/api/authors/create", AuthorController.create);
};
