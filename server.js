const dotenv = require("dotenv").config();
const express = require("express");
const compression = require("compression");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(cors());
app.use(compression());

app.listen(PORT, () => {
  console.log("API server now listening on PORT " + PORT);
});
