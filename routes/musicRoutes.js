const router = require("express").Router();
const {
  getMusic,
  addMusic,
  updateMusic,
  deleteMusic,
} = require("../controllers/musicController");

router.route("/").get(getMusic).post(addMusic);
router.route("/:id").delete(deleteMusic).put(updateMusic);

module.exports = router;
