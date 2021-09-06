const constants = require("./utils/constants")
const express = require('express')

/* JSON parser */
const bodyParser = require("body-parser")
const buttersRoutes = require("./routes/butters_routes")
const mediaItemsRoutes = require("./routes/media_items_routes")
const userRoutes = require("./routes/users_routes")
const avatarRoutes = require("./routes/avatars_routes")

const app = express()
const port = 3000
const BUTTER_URL = constants.BUTTER_URL
const FILE_URL = constants.FILE_URL
const USER_URL = constants.USER_URL
const AVATAR_URL = constants.AVATAR_URL

app.use(BUTTER_URL, buttersRoutes)
app.use(FILE_URL, mediaItemsRoutes)
app.use(USER_URL, userRoutes)
app.use(AVATAR_URL, avatarRoutes)

app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.listen(port, () => {
    console.log(`Here we go`)
})