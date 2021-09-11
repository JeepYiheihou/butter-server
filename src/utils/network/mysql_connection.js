const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "localhost",
    user: "butter",
    password: "password",
    database: "butterdb"
})

module.exports = connection