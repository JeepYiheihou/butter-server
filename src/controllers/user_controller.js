const User = require("../models/user");

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

exports.get = function(req, res) {
    _get(req, res)
}