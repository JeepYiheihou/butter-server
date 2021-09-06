const fs = require("fs")
const path = require("path")

async function _get(req, res) {
    try {
        const fileName = req.params.fileName
        const filePath = path.resolve(__dirname + `../../../files/images/${fileName}`)
        res.sendFile(filePath)
    } catch(err) {
        console.log(err)
    }
}

exports.get = function(req, res) {
    _get(req, res)
}