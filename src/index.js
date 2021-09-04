const constants = require("./utils/constants")
const express = require('express')

/* JSON parser */
const bodyParser = require("body-parser")
const image_routes = require("./routes/image_routes")

const app = express()
const port = 3000
const BUTTER_URL = constants.BUTTER_URL

app.use(BUTTER_URL, image_routes)

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.listen(port, () => {
    console.log(`Here we go`)
})