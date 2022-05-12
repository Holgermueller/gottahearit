const router = require("express").Router();
const {
  getMusic,
  addMusic,
  updateMusic,
  deleteMusic,
} = require("../controllers/musicController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getMusic).post(protect, addMusic);
router.route("/:id").delete(protect, deleteMusic).put(protect, updateMusic);

module.exports = router;
