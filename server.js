const dotenv = require("dotenv").config();
const express = require("express");
const compression = require("compression");
const colors = require("colors");
const logger = require("morgan");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3001;

connectDB();

// let http = require("http");
// let size = http.maxHeaderSize;
// console.log("Max header size: ", size);
// 16384

const app = express();

app.use(logger("dev"));

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/music", require("./routes/musicRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("API server listening on PORT " + PORT);
});
