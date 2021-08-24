//routing for local development server (devServer.js)

const routes = require("express").Router();

const book = require("./book");
const books = require("./books");


routes.use("/", book);
routes.use("/", books);

module.exports = routes;