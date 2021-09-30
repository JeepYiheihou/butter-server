const fs = require("fs")
const path = require("path")
const multer = require("multer")

async function _get(req, res) {
    try {
        const fileName = req.params.fileName
        const filePath = path.resolve(__dirname + `../../../files/images/${fileName}`)
        res.sendFile(filePath)
    } catch(err) {
        console.log(err)
    }
}

async function _getBackgroundImage(req, res) {
    try {
        const filePath = path.resolve(__dirname + `../../../files/background/background.png`)
        res.sendFile(filePath)
    } catch(err) {
        console.log(err)
    }
}

exports.get = function(req, res) {
    _get(req, res)
}

exports.getBackgroundImage = function(req, res) {
    _getBackgroundImage(req, res)
}