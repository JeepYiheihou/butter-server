const yaml = require("js-yaml")
const fs = require("fs")

const connPool = require("../network/mysql_connection")

const users = [
    {
        userId: 1,
        creationTimestamp: 100000,
        name: "yiheihou",
        email: "myemail.gmail.com",
        address: "vancouver",
        gender: "male",
        avatarUrl: "1.jpeg",
        status: "active" 
    },
    {
        userId: 2,
        creationTimestamp: 100000,
        name: "goga",
        email: "youremail.gmail.com",
        address: "santa clara",
        gender: "female",
        avatarUrl: "2.jpeg",
        status: "active" 
    }
]

const whenYouAreOld = 
"When you are old and gray and full of sleep,\n \
And nodding by the fire, take down this book,\n \
And slowly read, and dream of the soft look\n \
Your eyes had once, and of their shadows deep;\n \
How many loved your moments of glad grace,\n \
And loved your beauty with love false or true;\n \
But one man loved the pilgrim soul in you,\n \
And loved the sorrows of your changing face;\n \
And bending down beside the glowing bars,\n \
Murmur, a little sadly,how love fled\n \
And paced upon the mountains overhead,\n \
And hid his face amid a crowd of stars.\n"
const contentText = "喂马，劈柴，周游世界\n" + whenYouAreOld

const butters = [
    {
        butterId: 1,
        userId: 1,
        creationTimestamp: 10000,
        type: "gallery",
        status: "active",
        title: "Hey, I'm missing you",
        contentText: contentText
    },
    {
        butterId: 2,
        userId: 1,
        creationTimestamp: 10001,
        type: "gallery",
        status: "active",
        title: "Hey, I'm missing you",
        contentText: contentText
    },
    {
        butterId: 3,
        userId: 2,
        creationTimestamp: 10001,
        type: "gallery",
        status: "active",
        title: "Cutie cutie bunny",
        contentText: contentText
    },
    {
        butterId: 4,
        userId: 1,
        creationTimestamp: 10005,
        type: "gallery",
        status: "active",
        title: "Hey, I'm missing you",
        contentText: contentText
    },
]

const wishes = [
    {
        wishId: 1,
        userId: 1,
        priority: 3,
        creationTimestamp: 10000,
        status: "active",
        contentText: "goga"
    },
    {
        wishId: 2,
        userId: 1,
        priority: 3,
        creationTimestamp: 10002,
        status: "active",
        contentText: "happiness"
    },
    {
        wishId: 3,
        userId: 2,
        priority: 3,
        creationTimestamp: 10005,
        status: "active",
        contentText: "mounts"
    },
    {
        wishId: 4,
        userId: 2,
        priority: 3,
        creationTimestamp: 10007,
        status: "active",
        contentText: "seas"
    },
    {
        wishId: 5,
        userId: 2,
        priority: 3,
        creationTimestamp: 10010,
        status: "active",
        contentText: "flowers"
    },
]

const comments = [
    {
        commentId: 1,
        butterId: 1,
        posterUserId: 1,
        creationTimestamp: 121,
        status: "active", 
        contentText: "This is nice"
    },
    {
        commentId: 2,
        butterId: 1,
        posterUserId: 1,
        creationTimestamp: 122,
        status: "active",
        contentText: "这个很棒"
    },
    {
        commentId: 3,
        butterId: 1,
        posterUserId: 1,
        creationTimestamp: 123,
        status: "active",
        contentText: "可是我真的很想回到过去"
    },
    {
        commentId: 4,
        butterId: 1,
        posterUserId: 1,
        creationTimestamp: 123,
        status: "active",
        contentText: "Would you ever regret?"
    },
    {
        commentId: 5,
        butterId: 1,
        posterUserId: 1,
        creationTimestamp: 123,
        status: "active", 
        contentText: "就只好先这样了吧"
    },
    {
        commentId: 6,
        butterId: 1,
        posterUserId: 1,
        creationTimestamp: 123,
        status: "active",
        contentText: "好吧呀\n这就是生活吧"
    },
    {
        commentId: 7,
        butterId: 1,
        posterUserId: 1,
        creationTimestamp: 123,
        status: "active",
        contentText: "Viva la vida"
    },
    {
        commentId: 8,
        butterId: 1,
        posterUserId: 2,
        creationTimestamp: 125,
        status: "active",
        contentText: "Meow!"
    }
]

const proposals = [

]

const mediaItems = [
    {
        mediaItemId: 1,
        butterId: 1,
        type: "image",
        url: "1.jpeg",
        displayHeight: 225,
        displayWidth: 225,
    },
    {
        mediaItemId: 2,
        butterId: 1,
        type: "image",
        url: "4.jpeg",
        displayHeight: 960,
        displayWidth: 720,
    },
    {
        mediaItemId: 3,
        butterId: 1,
        type: "image",
        url: "5.jpeg",
        displayHeight: 800,
        displayWidth: 800,
    },
    {
        mediaItemId: 4,
        butterId: 2,
        type: "image",
        url: "1.jpeg",
        displayHeight: 225,
        displayWidth: 225,
    },
    {
        mediaItemId: 5,
        butterId: 2,
        type: "image",
        url: "4.jpeg",
        displayHeight: 960,
        displayWidth: 720,
    },
    {
        mediaItemId: 6,
        butterId: 2,
        type: "image",
        url: "5.jpeg",
        displayHeight: 800,
        displayWidth: 800,
    },
    {
        mediaItemId: 7,
        butterId: 3,
        type: "image",
        url: "1.jpeg",
        displayHeight: 225,
        displayWidth: 225,
    },
    {
        mediaItemId: 8,
        butterId: 3,
        type: "image",
        url: "4.jpeg",
        displayHeight: 960,
        displayWidth: 720,
    },
    {
        mediaItemId: 9,
        butterId: 3,
        type: "image",
        url: "5.jpeg",
        displayHeight: 800,
        displayWidth: 800,
    },
    {
        mediaItemId: 10,
        butterId: 4,
        type: "image",
        url: "1.jpeg",
        displayHeight: 225,
        displayWidth: 225,
    },
    {
        mediaItemId: 11,
        butterId: 4,
        type: "image",
        url: "4.jpeg",
        displayHeight: 960,
        displayWidth: 720,
    },
    {
        mediaItemId: 12,
        butterId: 4,
        type: "image",
        url: "5.jpeg",
        displayHeight: 800,
        displayWidth: 800,
    },
    
]

async function addEntry(promisePool, tableName, valuesItem, models) {
    try {
        const paramList = models[tableName]
        paramList.forEach(element => {
            for (let paramName in element) {
                if (!(paramName in valuesItem)) {
                    throw `Parameter ${paramName} is needed but not given when populating table ${tableName}.`
                }
            }
        })
        const commandLine = `INSERT INTO ${tableName} SET ?`
        await promisePool.query(commandLine, valuesItem)
    } catch (e) {
        console.log(e)
    }
}

async function main() {
    // Parse in the data models
    var models
    try {
        models = yaml.load(fs.readFileSync("./models.yaml", "utf8"))
    } catch (e) {
        console.log(e)
    }

    promisePool = connPool.promise()

    for (let i = 0; i < users.length; i++) {
        const user = users[i]
        await addEntry(promisePool, "users", user, models)
    }

    for (let i = 0; i < butters.length; i++) {
        const butter = butters[i]
        await addEntry(promisePool, "butters", butter, models)
    }

    for (let i = 0; i < wishes.length; i++) {
        const wish = wishes[i]
        await addEntry(promisePool, "wishes", wish, models)
    }

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i]
        await addEntry(promisePool, "comments", comment, models)
    }

    for (let i = 0; i < proposals.length; i++) {
        const proposal = proposals[i]
        await addEntry(promisePool, "proposals", proposal, models)
    }
    
    for (let i = 0; i < mediaItems.length; i++) {
        const mediaItem = mediaItems[i]
        await addEntry(promisePool, "media_items", mediaItem, models)
    }

    connPool.end()
}


main()