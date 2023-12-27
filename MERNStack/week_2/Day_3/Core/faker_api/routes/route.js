const newFakeUser = require("../models/user");
const newFakeCompany = require("../models/company");
module.exports = (app) => {
    // READ ALL
    app.get("/api/user/company", (req, res) => {
        const data = {
            user: newFakeUser,
            company: newFakeCompany
        };
      res.json(data);
    //   res.json(newFakeCompany);
    });
  
  };