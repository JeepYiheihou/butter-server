const connPool = require("../utils/network/mysql_connection")
const constants = require("../utils/constants")
const { response } = require("express")
const COMMENTS_DB_TABLE_NAME = constants.COMMENTS_DB_TABLE_NAME

const ButterComment = function(comment) {
    this.commentId = comment.commentId
    this.butterId = comment.butterId
    this.posterUserId = comment.posterUserId
    this.timestamp = comment.timestamp
    this.content = comment.content
}

ButterComment.getByButterId = async function(butterId) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `SELECT * FROM ${COMMENTS_DB_TABLE_NAME} \
                             WHERE butterId=${butterId}`
        const rawData = await promisePool.query(commandLine)
        const response = rawData[0]
        return response
    } catch(e) {
        console.log(e)
    }
}

module.exports = ButterComment