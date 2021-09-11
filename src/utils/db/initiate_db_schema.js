const yaml = require("js-yaml")
const fs = require("fs")

const connection = require("../network/mysql_connection")
connection.connect()

// Parse in the data models
var models
try {
    models = yaml.load(fs.readFileSync("./models.yaml", "utf8"))
} catch (e) {
    console.log(e)
}

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

// Create tables
try {
    for (tableName in models) {
        let commandLine = generateCreateTableCommandLine(tableName, models[tableName])
        connection.query(commandLine)
    }
} catch (e) {
    console.log(e)
}

connection.end()