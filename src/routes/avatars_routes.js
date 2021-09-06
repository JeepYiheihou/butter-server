const express = require("express")
const router = express.Router()
const avatarController = require("../controllers/avatars_controller")

router.get("/:fileName", avatarController.get)

module.exports = router