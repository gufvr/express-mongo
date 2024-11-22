import { author } from "../models/Author.js";

class AuthorController {
  static async listAuthors(req, res) {
    try {
      const authorList = await author.find({});
      res.status(200).json(authorList);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failed` });
    }
  }

  static async listAuthorById(req, res) {
    try {
      const id = req.params.id;

      const authorFound = await author.findById(id);
      res.status(200).json(authorFound);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - author request failed` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;

      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "updated author" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - author update failed` });
    }
  }

  static async registerAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res
        .status(201)
        .json({ message: "created successfully", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - fail to register author` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;

      await author.findByIdAndDelete(id, req.body);
      res.status(200).json({ message: "deleted author" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - author removal failed` });
    }
  }
}

export default AuthorController;
