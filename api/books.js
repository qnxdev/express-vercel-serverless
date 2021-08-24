const app = require("../app");
const route = require("../routes/books");

app.use("/api/", route);

module.exports = app;
