const express = require("express");
const app = express();
const cors = require("cors");
const ErrorMiddleware = require("./middlewares/error.js");
const isAuth = require("./middlewares/isAuthenticate.js");

const port = 5500;

// config:
require("dotenv").config({ path: "./config/config.env" });
require("./config/db.js");

const corsOptions = {
  origin: "http://127.0.0.1:5173",
  method: ["GET", "POST", "PUT", "DELETE"],
};

// Middlewares:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/user", require("./router/user.js"));
app.use("/todos", isAuth, require("./router/todos.js"));

app.get("*", (req, res) => {
  res.json({
    success: false,
    method: "Get",
    msg: "404 Page Not Found",
  });
});

app.post("*", (req, res) => {
  res.json({
    success: false,
    method: "Post",
    msg: "404 Page Not Found",
  });
});

app.listen(port, () => {
  console.log("Server is listening on port", port);
});

app.use(ErrorMiddleware);
