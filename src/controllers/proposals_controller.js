const Proposal = require("../models/proposal")
const jwt_utils = require("../utils/network/jwt_utils")

async function _create(req, res) {
    try {
        const proposal = req.body
        const insertId = await Proposal.create(proposal)
        const message = "Proposal successfully posted."
        res.json({ error: false, message: message, id: insertId });
    } catch(e) {
        throw e
    }
}

exports.create = function(req, res) {
    _create(req, res)
}