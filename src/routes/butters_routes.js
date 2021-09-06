const express = require("express")
const router = express.Router()
const buttersController = require("../controllers/butters_controller")

router.get("/all", buttersController.getAll)

module.exports = router;