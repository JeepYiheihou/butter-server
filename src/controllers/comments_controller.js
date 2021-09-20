const ButterComment = require("../models/comment")

const connPool = require("../utils/network/mysql_connection")

async function _getByButterId(req, res) {
    const butterId = req.params.butterId
    const comments = await ButterComment.getByButterId(butterId)
    res.json(comments)
}

async function _create(req, res) {
    const comment = new ButterComment(req.body)
    const insertId = await ButterComment.create(comment)
    const message = "Comment successfully posted."
    res.json({ error: false, message: message, id: insertId });
}

exports.getByButterId = function(req, res) {
    _getByButterId(req, res)
}

exports.create = function(req, res) {
    _create(req, res)
}