const constants = Object.freeze({
    PORT: 3000,
    JWT_SECRETE: "butterbutter",

    BUTTER_URL: "/api/butters",
    MEDIA_ITEMS_URL:"/api/media_items",
    FILE_URL:"/api/files",
    USER_URL: "/api/users",
    AVATAR_URL: "/api/avatars",
    COMMENT_URL: "/api/comments",

    USERS_DB_TABLE_NAME: "users",
    WISHES_DB_TABLE_NAME: "wishes",
    BUTTERS_DB_TABLE_NAME: "butters",
    COMMENTS_DB_TABLE_NAME: "comments",
    PROPOSALS_DB_TABLE_NAME: "proposals",
    MEDIA_ITEMS_DB_TABLE_NAME: "media_items"
})

module.exports = constants