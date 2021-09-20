const constants = require("./utils/constants")
const express = require('express')

/* JSON parser */
const buttersRoutes = require("./routes/butters_routes")
const mediaItemsRoutes = require("./routes/media_items_routes")
const mediaFilesRoutes = require("./routes/media_files_routes")
const userRoutes = require("./routes/users_routes")
const avatarRoutes = require("./routes/avatars_routes")
const commentsRoutes = require("./routes/comments_routes")

const port = constants.PORT
const BUTTER_URL = constants.BUTTER_URL
const MEDIA_ITEMS_URL = constants.MEDIA_ITEMS_URL
const FILE_URL = constants.FILE_URL
const USER_URL = constants.USER_URL
const AVATAR_URL = constants.AVATAR_URL
const COMMENT_URL = constants.COMMENT_URL

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(BUTTER_URL, buttersRoutes)
app.use(MEDIA_ITEMS_URL, mediaItemsRoutes)
app.use(FILE_URL, mediaFilesRoutes)
app.use(USER_URL, userRoutes)
app.use(AVATAR_URL, avatarRoutes)
app.use(COMMENT_URL, commentsRoutes)

app.listen(port, () => {
    console.log(`Here we go`)
})