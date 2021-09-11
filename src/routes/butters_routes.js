const express = require("express")
const router = express.Router()
const buttersController = require("../controllers/butters_controller")

router.get("/all", buttersController.getAll)

router.get("/userId/:userId", buttersController.getByUserId)

router.get("/comments/butterId/:butterId", buttersController.getCommentsByButterId)

module.exports = router;