require("dotenv").config();
const express = require("express");
const applyMiddleware = require("./middlewares/middlewares");
const applyRouter = require("./routers/routes");
const databaseConnect = require("./utils/databaseConnect");
const app = express();

//middlewares
applyMiddleware(app);

//routes
applyRouter(app);

//database
databaseConnect();

app.listen(3001, () => {
  console.log("Server is running");
});
