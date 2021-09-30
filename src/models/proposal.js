const connPool = require("../utils/network/mysql_connection")
const constants = require("../utils/constants")
const PROPOSALS_DB_TABLE_NAME = constants.PROPOSALS_DB_TABLE_NAME

const Proposal = function(proposal) {
    this.proposalId = proposal.proposalId
    this.fromButterId = proposal.fromButterId
    this.toButterId = proposal.toButterId
    this.creationTimestamp = proposal.creationTimestamp
    this.type = proposal.type
    this.status = proposal.status
}

Proposal.create = async function(proposal) {
    try {
        const promisePool = connPool.promise()

        proposal.type = "exchange"
        proposal.status = "pending"
        proposal.creationTimestamp = Math.floor(Data.now() / 1000)

        const commandLine = `INSERT INTO ${PROPOSALS_DB_TABLE_NAME} SET ?`
        const rawData = await promisePool.query(commandLine, proposal)
        const response = rawData[0]
        const insertId = response.insertId
        return insertId
    } catch(e) {
        throw e
    }
}

module.exports = Proposal