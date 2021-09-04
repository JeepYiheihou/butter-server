const express = require("express")
const router = express.Router();
const imageController = require("../controllers/image_controller")

router.get("/:imageName", imageController.get);

module.exports = router;