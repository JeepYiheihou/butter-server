const yaml = require("js-yaml")
const fs = require("fs")
const readline = require('readline-sync');

const connPool = require("../network/mysql_connection")

async function main() {
    const confirm = readline.question(
        "[Warning] We are about to delete contents from all tables from butterdb. Are you sure? (yes to confirm)")
    
    if (confirm != 'yes') {
        connPool.end()
        return
    }
    
    // Parse in the data models
    var models
    try {
        models = yaml.load(fs.readFileSync("./models.yaml", "utf8"))
    } catch (e) {
        console.log(e)
    }
    
    promisePool = connPool.promise()
    for (tableName in models) {
        await promisePool.query(`DELETE FROM ${tableName}`)
        console.log(tableName)
    }
    
    connPool.end()
}

main()