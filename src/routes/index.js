import express from "express";
import books from "./bookRoute.js";
import authors from "./authorRoute.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send(" Node.js Course"));

  app.use(express.json(), books, authors);
};

export default routes;
