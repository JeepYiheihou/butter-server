const express = require("express")
const router = express.Router()
const commentsController = require("../controllers/comments_controller")

router.get("/butterId/:butterId", commentsController.getByButterId)

router.post("/butterId/:butterId", commentsController.createByButterId)

module.exports = router;