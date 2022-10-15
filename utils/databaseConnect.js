const mongoose = require("mongoose");

const databaseConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
module.exports = databaseConnect;
