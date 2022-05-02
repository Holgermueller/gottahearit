const dotenv = require("dotenv").config();
const express = require("express");
const compression = require("compression");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(cors());
app.use(compression());

const mongoDB = process.env.MONGO_URI;

//const mongoDB = "mongodb://127.0.0.1/";

mongoose.connect(mongoDB || "mongodb://127.0.0.1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.listen(PORT, () => {
  console.log("API server now listening on PORT " + PORT);
});
