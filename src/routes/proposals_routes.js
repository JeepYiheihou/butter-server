const express = require("express")
const router = express.Router()
const proposalController = require("../controllers/proposals_controller")

router.post("/", proposalController.create)

module.exports = router