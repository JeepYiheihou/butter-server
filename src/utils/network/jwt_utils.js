const constants = require("../constants");
const JWT_SECRETE = constants.JWT_SECRETE

const jwt = require("jsonwebtoken");

function generateJwt(user) {
    const payload = {
        name: user.name,
        userId: user.userId,
    }
    const token = jwt.sign(payload, JWT_SECRETE)
    return token
}

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRETE)
        return decoded
    } catch(e) {
        throw e
    }
}

function verifyHeaders(headers) {
    try {
        const tokenStr = headers["authorization"]
        const strs = tokenStr.split(" ")
        if (strs.length == 2) {
            const scheme = strs[0]
            const token = strs[1]

            if (scheme != "Bearer") {
                throw "[Butter] Invalid jwt token. Scheme 'Bearer' not found."
            }
            return verifyToken(token)
        } else {
            throw "[Butter] Invalid jwt token header. Header string should be splited into two parts."
        }
    } catch(e) {
        throw e
    }
}

exports.generateJwt = generateJwt

exports.verifyToken = verifyToken

exports.verifyHeaders = verifyHeaders