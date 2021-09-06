const express = require("express")
const router = express.Router();
const mediaItemController = require("../controllers/media_items_controller")

router.get("/:fileName", mediaItemController.get)

module.exports = router