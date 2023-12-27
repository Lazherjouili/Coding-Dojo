const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./routes/user_route")(app);
require("./routes/company_route")(app);
require("./routes/route")(app);




app.listen( port, () => console.log(`Listening on port: ${port}`) );