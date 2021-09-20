const yaml = require("js-yaml")
const fs = require("fs")

const connPool = require("../network/mysql_connection")

function generateCreateTableCommandLine(tableName, paramList) {
    var paramDetails = ""
    paramList.forEach(element => {
        for (let paramName in element) {
            const paramType = element[paramName]
            if (element == paramList[0]) {
                paramDetails += `${paramName} ${paramType} AUTO_INCREMENT, `
            } else {
                paramDetails += `${paramName} ${paramType}, `
            }
        }
    });

    let primaryKeyElement = paramList[0]
    for (let paramName in primaryKeyElement) {
        paramDetails += `PRIMARY KEY (${paramName})`
    }

    commandLine = `CREATE TABLE ${tableName} ( ${paramDetails} )`
    return commandLine 
}

async function main() {
    // Parse in the data models
    var models
    try {
        models = yaml.load(fs.readFileSync("./models.yaml", "utf8"))
    } catch (e) {
        throw e
    }

    promisePool = connPool.promise()
    // Create tables
    for (tableName in models) {
        let commandLine = generateCreateTableCommandLine(tableName, models[tableName])
        await promisePool.query(commandLine)
        console.log(tableName)
    }
    connPool.end()
}

main()