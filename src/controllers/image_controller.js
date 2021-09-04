const fs = require("fs")
const path = require("path")

async function _get(req, res) {
    try {
        const imageName = req.params.imageName
        const filePath = path.resolve(__dirname + `../../../files/images/${imageName}`)
        res.sendFile(filePath)
    } catch(err) {
        console.log(err)
    }
}

exports.get = function(req, res) {
    _get(req, res)
}