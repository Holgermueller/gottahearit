const path = require("path");
const router = require("express").Router();
const userRoutes = require("./userApi");
const musicRoutes = require("./musicApi");

router.use("/userApi", userRoutes);
router.use("/musicApi", musicRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
