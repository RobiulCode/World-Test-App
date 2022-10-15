const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const middlewares = [
  cors(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false })
];

const applyMiddleware = (app) => {
  middlewares.map((m) => app.use(m));
};

module.exports = applyMiddleware;
