const connPool = require("../utils/network/mysql_connection")
const constants = require("../utils/constants")
const USERS_DB_TABLE_NAME = constants.USERS_DB_TABLE_NAME

const crypto = require("crypto")

const User = function(user) {
    this.userId = user.userId
    this.name = user.name
    this.email = user.email
    this.address = user.address
    this.gender = user.gender
    this.avatarUrl = user.avatarUrl
    this.creationTimestamp = user.creationTimestamp
    this.status = user.status
}

User.get = async function(userId) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `SELECT * FROM ${USERS_DB_TABLE_NAME} 
                             WHERE userId=${userId}`
        const rawData = await promisePool.query(commandLine)
        const response = rawData[0]
        return response
    } catch (e) {
        throw e
    }
}

User.login = async function(email, password) {
    try {
        const promisePool = connPool.promise()

        // Passwords are stored in db as SHA256 hash.
        const passwordHash = crypto.createHash("sha256").
                                    update(password).
                                    digest("hex")

        const commandLine = `SELECT * FROM ${USERS_DB_TABLE_NAME} 
                             WHERE email='${email}' AND password='${passwordHash}'`
        const rawData = await promisePool.query(commandLine)
        const response = rawData[0]
        return response
    } catch(e) {
        throw e
    }
}

User.create = async function(user) {
    try {
        console.log(user)

        const promisePool = connPool.promise()

        // Status.
        user.status = "active"

        // Creation time.
        user.creationTimestamp = Math.floor(Date.now() / 1000)

        // Hash password with SHA256.
        const password = user.password
        user.password = crypto.createHash("sha256").
                               update(password).
                               digest("hex")
        
        const commandLine = `INSERT INTO ${USERS_DB_TABLE_NAME} SET ?`
        const rawData = await promisePool.query(commandLine, user)
        const response = rawData[0]
        const insertId = response.insertId
        return insertId
    } catch(e) {
        throw e
    }
}

User.checkEmail = async function(email) {
    try {
        const promisePool = connPool.promise()

        const commandLine = `SELECT * FROM ${USERS_DB_TABLE_NAME} WHERE ?`
        const rawData = await promisePool.query(commandLine, { email: email })
        const response = rawData[0]
        return response
    } catch(e) {
        throw e
    }
}

module.exports = User