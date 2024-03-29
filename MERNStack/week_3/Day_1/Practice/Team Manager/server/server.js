require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.port;
const cors = require("cors");
app.use( express.json() );
app.use( express.urlencoded({ extended: true }), cors() );

// grab the config
require("./config/mongoose.config");
// grab the routes
require("./routes/team-manager.routes")(app);




app.listen( port, () => console.log(`Listening on port: ${port}`) );