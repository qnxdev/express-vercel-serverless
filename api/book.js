const app = require("../app");
const route = require("../routes/book");

app.use("/api/", route);

module.exports = app;
