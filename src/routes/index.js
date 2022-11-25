const express = require("express");
const router = express.Router();
const activityController = require("../controllers/ActivityController");

router.get("/", activityController.index);
router.post("/", activityController.store);
router.get("/:id", activityController.edit);
router.put("/:id", activityController.update);
router.delete("/:id", activityController.delete);

module.exports = router;
