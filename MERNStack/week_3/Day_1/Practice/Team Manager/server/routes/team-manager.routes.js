const PlayerController = require("../controllers/team-manager.controller");

module.exports = (app) => {
  app.get("/api/players",PlayerController.findAllPlayers);
  app.post("/api/players",PlayerController.createNewPlayer);
  app.get("/api/players/:id",PlayerController.findOnePlayer  );
  app.patch("/api/players/:id", PlayerController.updateExisitingPlayer );
  app.delete("/api/players/:id", PlayerController.deleteOnePlayer );
};