const router = require("express").Router();
const musicRoutes = require("./musicRoutes");

router.use("/musicRoutes", musicRoutes);

module.exports = router;
