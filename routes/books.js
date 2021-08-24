//functionality of a route

const books = require("express").Router();

books.get("/books", async function (req, res) {
  res.send([
    { bookName: "Book Ben", bookId: "xcvrgf" },
    { bookName: "Book Boom", bookId: "iyuitr" },
    { bookName: "Book ABCD", bookId: "nfgvcd" },
  ]);
});

module.exports = books;
