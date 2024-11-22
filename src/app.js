import express from "express";
import databaseConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await databaseConnect();

connection.on("error", (error) => {
  console.error("connection error", error);
});

connection.once("open", () => {
  console.log("Database connection success");
});

const app = express();
routes(app);

app.delete("/books/:id", (req, res) => {
  const index = bookSearch(req.params.id);
  books.splice(index, 1);
  res.status(200).send("Book deleted");
});

export default app;
