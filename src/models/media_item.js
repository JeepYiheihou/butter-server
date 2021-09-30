const connPool = require("../utils/network/mysql_connection")
const constants = require("../utils/constants")
const MEDIA_ITEMS_DB_TABLE_NAME = constants.MEDIA_ITEMS_DB_TABLE_NAME

const MediaItem = function(mediaItem) {
    this.mediaItemId = mediaItem.mediaItemId
    this.type = mediaItem.type
    this.url = mediaItem.url
    this.displayHeight = mediaItem.displayHeight
    this.displayWidth = mediaItem.displayWidth
}

MediaItem.create = async function(mediaItem) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `INSERT INTO ${MEDIA_ITEMS_DB_TABLE_NAME} SET ?`
        await promisePool.query(commandLine, mediaItem)
    } catch(e) {
        throw e
    }
}

MediaItem.getByMediaItemId = async function(mediaItemId) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `SELECT * FROM ${MEDIA_ITEMS_DB_TABLE_NAME} 
                             WHERE mediaItemId=${mediaItemId}`
        const rawData = await promisePool.query(commandLine)
        const response = rawData[0]
        if (response == null) {
            return null
        }
        return response
    } catch(e) {
        throw e
    }
}

MediaItem.getByButterId = async function(butterId) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `SELECT * FROM ${MEDIA_ITEMS_DB_TABLE_NAME} 
                             WHERE butterId=${butterId} ORDER BY mediaItemId ASC`
        const rawData = await promisePool.query(commandLine)
        const response = rawData[0]
        if (response == null) {
            return null
        }
        return response
    } catch(e) {
        throw e
    }
}

module.exports = MediaItem