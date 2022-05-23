const path = require("path");
const express = require("express");
const compression = require("compression");
const colors = require("colors");
const dotenv = require("dotenv").config();
const logger = require("morgan");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3001;

connectDB();

const app = express();

app.use(logger("dev"));

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/music", require("./routes/musicRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("API server listening on PORT " + PORT);
});
