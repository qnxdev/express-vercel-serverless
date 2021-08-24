//routing for local development server (devServer.js)

const routes = require("express").Router();

const book = require("./book");
const books = require("./books");

routes.get("/", async function (req, res) {
  //homepage route returns some HTML
  res.send(`<h1>Reached home!</h1> 
            <br>
            <a href='/books'>Books</a>`);
});

routes.use("/", book);
routes.use("/", books);

module.exports = routes;
