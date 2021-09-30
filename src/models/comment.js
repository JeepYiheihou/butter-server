const connPool = require("../utils/network/mysql_connection")
const constants = require("../utils/constants")
const COMMENTS_DB_TABLE_NAME = constants.COMMENTS_DB_TABLE_NAME

const ButterComment = function(comment) {
    this.commentId = comment.commentId
    this.butterId = comment.butterId
    this.posterUserId = comment.posterUserId
    this.creationTimestamp = comment.creationTimestamp
    this.status = comment.status
    this.contentText = comment.contentText
}

ButterComment.create = async function(comment) {
    try {
        const promisePool = connPool.promise()

        // Set status and creationTimestamp from server side. Timestamp is rounded to seconds.
        comment.status = "active"
        comment.creationTimestamp = Math.floor(Date.now() / 1000)

        const commandLine = `INSERT INTO ${COMMENTS_DB_TABLE_NAME} SET ?`
        const rawData = await promisePool.query(commandLine, comment)
        const response = rawData[0]
        const insertId = response.insertId
        return insertId
    } catch(e) {
        throw e
    }
}

ButterComment.getByButterId = async function(butterId) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `SELECT * FROM ${COMMENTS_DB_TABLE_NAME} 
                             WHERE butterId=${butterId}`
        const rawData = await promisePool.query(commandLine)
        const response = rawData[0]
        return response
    } catch(e) {
        throw e
    }
}

module.exports = ButterComment