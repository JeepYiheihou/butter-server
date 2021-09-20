const connPool = require("../utils/network/mysql_connection")
const constants = require("../utils/constants")
const BUTTERS_DB_TABLE_NAME = constants.BUTTERS_DB_TABLE_NAME

const MediaItem = require("./media_item")
const res = require("express/lib/response")
const { response } = require("express")

const Butter = function(butter) {
    this.butterId = butter.butterId
    this.userId = butter.userId
    this.creationTimestamp = butter.creationTimestamp
    this.type = butter.type
    this.status = butter.status
    this.title = butter.title
    this.contentText = butter.contentText
    this.mediaItems = butter.mediaItems
}

Butter.create = async function(butter) {
    try {
        // Handle mediaItems separately.
        if (!butter.mediaItems) {
            throw("mediaItems should be specified in a Butter object.")
        }
        promisePool = connPool.promise()

        const mediaItems = butter.mediaItems
        delete butter.mediaItems
        
        // Insert butter, and then get the butter's id.
        const commandLineButter = `INSERT INTO ${BUTTERS_DB_TABLE_NAME} SET ?`
        const rawDataButter = await promisePool.query(commandLineButter, butter)
        const responseButter = rawDataButter[0]
        const insertIdButter = responseButter.insertId

        // Then insert mediaItems.
        for (let i = 0; i < mediaItems.length; i++) {
            const mediaItem = mediaItems[i]
            mediaItem.butterId = insertIdButter
            await MediaItem.create(mediaItem)
        }

        return insertIdButter
    } catch(e) {
        throw e
    }
}

Butter.getByButterId = async function(butterId) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `SELECT * FROM ${BUTTERS_DB_TABLE_NAME} \
                             WHERE butterId=${butterId}`
        const rawData = await promisePool.query(commandLine)
        const response = rawData[0]
        if (response == null) {
            return null
        }
        // Populate mediaItems for this butter.
        response.mediaItems = await MediaItem.getByButterId(butterId)
        return response
    } catch(e) {
        throw e
    }
}

Butter.getByUserId = async function(userId) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `SELECT * FROM ${BUTTERS_DB_TABLE_NAME} \
                             WHERE userId=${userId}`
        const rawData = await promisePool.query(commandLine)
        const response = rawData[0]
        if (response == null) {
            return response
        }
        for (let i = 0; i < response.length; i++) {
            response[i].mediaItems = await MediaItem.getByButterId(response[i].butterId)
        }
        return response
    } catch(e) {
        throw e
    }
}

module.exports = Butter