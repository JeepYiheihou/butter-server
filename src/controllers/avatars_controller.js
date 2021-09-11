const fs = require("fs")
const path = require("path")

async function _get(req, res) {
    try {
        const fileName = req.params.fileName
        const filePath = path.resolve(__dirname + `../../../files/avatars/${fileName}`)
        res.sendFile(filePath)
    } catch(err) {
        console.log(err)
    }
}

async function _getByUserId(req, res) {
    try {
        const filePath = path.resolve(__dirname + `../../../files/avatars/1.jpeg`)
        res.sendFile(filePath)
    } catch(err) {
        console.log(err)
    }
}

exports.get = function(req, res) {
    _get(req, res)
}

exports.getByUserId = function(req, res) {
    _getByUserId(req, res)
}