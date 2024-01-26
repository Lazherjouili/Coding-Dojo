const CountryController = require("../controllers/country.controller");

module.exports = (app) => {
  app.get("/api/countries",CountryController.findAllCountries);
  app.post("/api/countries",CountryController.createNewCountry);
  app.get("/api/countries/:id",CountryController.findOneCountry  );
  app.patch("/api/countries/:id", CountryController.updateExisitingCountry );
  app.delete("/api/countries/:id", CountryController.deleteOneCountry );
};