import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {
  static async listBooks(req, res) {
    try {
      const bookList = await book.find({});
      res.status(200).json(bookList);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  }

  static async listBookById(req, res) {
    try {
      const id = req.params.id;

      const bookFound = await book.findById(id);
      res.status(200).json(bookFound);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - book request failed` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;

      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "updated book" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - book update failed` });
    }
  }

  static async registerBook(req, res) {
    const newBook = req.body;

    try {
      const authorFound = await author.findById(newBook.author);
      const fullBook = { ...newBook, author: { ...authorFound._doc } };
      const bookCreated = await book.create(fullBook);

      res.status(201).json({ message: "created successfully", book: newBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - fail to register book` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;

      await book.findByIdAndDelete(id, req.body);
      res.status(200).json({ message: "deleted book" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - book removal failed` });
    }
  }

  static async listBooksByPublisher(req, res) {
    const publisher = req.query.publisher;

    try {
      const booksByPublisher = await book.find({ publisher: publisher });

      res.status(200).json(booksByPublisher);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - search failed` });
    }
  }
}

export default BookController;
