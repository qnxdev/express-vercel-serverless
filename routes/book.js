//functionality of a route

const book = require("express").Router();

book.get("/book", async function (req, res) {
  const { bookId } = req.query;
  if (bookId) {
    res.status(200).send({ bookName: "Some Book", bookId: bookId });
  } else {
    res.send("No book ID");
  }
});

book.post("/book", async function (req, res) {
    const { bookId, bookName } = req.body;
    //do something
    res.send("Something done");
  });

module.exports = book;
