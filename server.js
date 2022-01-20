const express = require("express");
const compression = require("compression");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(compression());

app.listen(PORT, () => {
  console.log("API server now listening on PORT " + PORT);
});
