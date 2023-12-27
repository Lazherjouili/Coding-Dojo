const newFakeCompany = require("../models/company");
module.exports = (app) => {
    // READ ALL
    app.get("/api/companies/new", (req, res) => {
      res.json(newFakeCompany);
    });
  
   
  };