const newFakeUser = require("../models/user");
module.exports = (app) => {
    // READ ALL
    app.get("/api/users/new", (req, res) => {
      res.json(newFakeUser);
    });
  
  };