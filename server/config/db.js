const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("db connection working");
  })
  .catch((err) => {
    console.log("Db Error :", err);
  });
