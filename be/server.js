const express = require("express");
const app = express();
const createError = require("http-errors");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoute = require("./routers/user.route");

const PORT = process.env.PORT || 8001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home page");
});
// api for user: login + register
app.use("/api", userRoute);

// handle errors
app.use((err, req, res, next) => {
  next(createError.NotFound());
});
app.use((err, req, res, next) => {
  res.json({
    error: err.status || 500,
    message: err.message,
  });
});
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  