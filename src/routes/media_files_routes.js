const express = require("express")
const router = express.Router();
const mediaFilesController = require("../controllers/media_files_controller")

router.get("/:fileName", mediaFilesController.get)

module.exports = router