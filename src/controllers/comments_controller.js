const ButterComment = require("../models/comment")

const connPool = require("../utils/network/mysql_connection")

async function _getByButterId(req, res) {
    const butterId = req.params.butterId
    const comments = await ButterComment.getByButterId(butterId)
    res.json(comments)
}

async function _createByButterId(req, res) {
    const butterId = req.params.butterId
    const comment = new ButterComment(req.body)
    await ButterComment.createByButterId(butterId, comment)
    const message = "Comment successfully posted."
    res.json({ error: false, message: message, id: response.insertId });
}

exports.getByButterId = function(req, res) {
    _getByButterId(req, res)
}

exports.createByButterId = function(req, res) {
    _createByButterId(req, res)
}