const yaml = require("js-yaml")
const fs = require("fs")
const readline = require('readline-sync');

const connection = require("../network/mysql_connection")

let confirm = readline.question(
    "[Warning] We are about to remove all tables from butterdb. Are you sure? (yes to confirm)")

if (confirm != 'yes') {
    connection.end()
    return
}

connection.connect()

// Parse in the data models
var models
try {
    models = yaml.load(fs.readFileSync("./models.yaml", "utf8"))
} catch (e) {
    console.log(e)
}

try {
    for (tableName in models) {
        connection.query(`DROP TABLE ${tableName}`)
    }    
} catch(e) {
    console.log(e)
}

connection.end()