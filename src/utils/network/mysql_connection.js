const mysql = require("mysql2")
const connPool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "butter",
    password: "password",
    database: "butterdb"
}, console.log("Connected to mysql butterdb"))

module.exports = connPool