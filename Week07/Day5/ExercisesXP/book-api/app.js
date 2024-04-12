import express from "express";
import books from "./data.js";

const app = express();
app.use(express.json())
app.listen(5000, (req, res) => {
  console.log("Listening on 5000!");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:bookId", (req, res) => {
  const id = Number(req.params.bookId);
  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).send("Book not found!");
  }
  res.status(200).json(book);
});

app.post("/api/books/", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title:req.body.title,
        author:req.body.author,
        publishedYear:req.body.publishedYear,
    }
    books.push(newBook)
    res.status(201).json(newBook)

});
