const express = require("express")
const router = express.Router()
const commentsController = require("../controllers/comments_controller")

router.get("/butterId/:butterId", commentsController.getByButterId)

router.post("/", commentsController.create)

module.exports = router;