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

app.use("/api/music", require("./routes/musicRoutes"));

const mongoDB = process.env.MONGO_URI;

mongoose.connect(mongoDB || "mongodb://127.0.0.1/myFirstDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("db connection!");
});

db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.listen(PORT, () => {
  console.log("API server listening on PORT " + PORT);
});
