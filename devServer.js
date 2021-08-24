const app = require("./app");
const routes = require("./routes/router");

app.use("/", routes);
/* app.use("/api/", routes);  //for API backend*/

//start server locally
app.listen(3000,function () {
    console.log("Server started. Go to http://localhost:3000/");
});
