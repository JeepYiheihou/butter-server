const express = require("express")
const router = express.Router()
const buttersController = require("../controllers/butters_controller")

router.get("/all", buttersController.getAll)

router.get("/butterId/:butterId", buttersController.getByButterId)

router.get("/userId/:userId", buttersController.getByUserId)

router.post("/", buttersController.create)

module.exports = router;