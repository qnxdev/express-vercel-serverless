const app = require("./app");
const routes = require("./routes/router");

app.use("/", routes);
/* app.use("/api/", routes);  //for API backend purpose*/

app.listen(3000);
