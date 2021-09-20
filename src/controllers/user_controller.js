const User = require("../models/user")
const jwt_utils = require("../utils/network/jwt_utils")

async function _login(req, res) {
    // Check with db about the user name and password
    const body = req.body
    const name = body.name
    const password = body.password

    const userList = await User.login(name, password)

    if (userList.length == 1) {
        const user = userList[0]
        // Generate and return jwt token.
        const token = jwt_utils.generateJwt(user)
        res.json({
            user: user,
            token: token
        })
    } else {
        res.status(400).send({ error: true, message: "Cannot log in." });
    }
}

async function _signup(req, res) {
    try {
        const user = req.body
        const insertId = await User.create(user)
        const message = "User successfully created."
        res.json({ error: false, message: message, id: insertId })
    } catch(e) {
        throw e
    }
}

async function _get(req, res) {
    const user = new User({
        userId: 1,
        name: "my_user_name",
        email: "yiheihou@gmail.com",
        address: "Vancouver",
        gender: "male",
        avatarUrl: "1.jpeg",
        wishList: [
            "pokemon",
            "cutie",
            "goga"
        ]
    })
    res.json(user)
}

exports.login = function(req, res) {
    _login(req, res)
}

exports.signup = function(req, res) {
    _signup(req, res)
}

exports.get = function(req, res) {
    _get(req, res)
}