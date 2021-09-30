const Butter = require("../models/butter")
const MediaItem = require("../models/media_item")
const jwt_utils = require("../utils/network/jwt_utils")

async function _create(req, res) {
    const butter = new Butter(req.body)
    const insertId = await Butter.create(butter)
    const message = "Butter successfully posted."
    res.json({ error: false, message: message, id: insertId });
}

async function _getAll(req, res) {

    var tokenInfo
    try {
        tokenInfo = jwt_utils.verifyHeaders(req.headers)
    } catch(e) {
        console.log(e)
        req.status(400).send({ error: true, message: "Cannot verify token." })
        return
    }

    const whenYouAreOld = 
    "When you are old and gray and full of sleep,\n"
    "And nodding by the fire, take down this book,\n"
    "And slowly read, and dream of the soft look\n"
    "Your eyes had once, and of their shadows deep;\n"
    "How many loved your moments of glad grace,\n"
    "And loved your beauty with love false or true;\n"
    "But one man loved the pilgrim soul in you,\n"
    "And loved the sorrows of your changing face;\n"
    "And bending down beside the glowing bars,\n"
    "Murmur, a little sadly,how love fled\n"
    "And paced upon the mountains overhead,\n"
    "And hid his face amid a crowd of stars.\n"

    const contentText = "从明天起，做一个幸福的人\n" + whenYouAreOld

    const mediaItems = [
        null,
        new MediaItem({mediaItemId: 1, type: "image", url: "1.jpeg", displayHeight: 225, displayWidth: 225}),
        new MediaItem({mediaItemId: 2, type: "image", url: "2.jpeg", displayHeight: 225, displayWidth: 225}),
        new MediaItem({mediaItemId: 3, type: "image", url: "3.jpeg", displayHeight: 800, displayWidth: 800}),
        new MediaItem({mediaItemId: 4, type: "image", url: "4.jpeg", displayHeight: 960, displayWidth: 720}),
        new MediaItem({mediaItemId: 5, type: "image", url: "5.jpeg", displayHeight: 800, displayWidth: 800}),
        new MediaItem({mediaItemId: 6, type: "image", url: "6.jpeg", displayHeight: 1080, displayWidth: 1080}),
        new MediaItem({mediaItemId: 7, type: "image", url: "7.jpeg", displayHeight: 225, displayWidth: 225}),
        new MediaItem({mediaItemId: 8, type: "image", url: "8.jpeg", displayHeight: 225, displayWidth: 225}),
        new MediaItem({mediaItemId: 9, type: "image", url: "9.jpeg", displayHeight: 800, displayWidth: 800}),
        new MediaItem({mediaItemId: 10, type: "image", url: "10.jpeg", displayHeight: 960, displayWidth: 720}),
        new MediaItem({mediaItemId: 11, type: "image", url: "11.jpeg", displayHeight: 800, displayWidth: 800}),
        new MediaItem({mediaItemId: 12, type: "image", url: "12.jpeg", displayHeight: 1080, displayWidth: 1080}),
    ]

    const butters = [
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute1", 
            contentText: contentText,
            mediaItems: [
                mediaItems[1],
                mediaItems[2],
                mediaItems[3]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute2",
            contentText: contentText,
            mediaItems: [
                mediaItems[3],
                mediaItems[2],
                mediaItems[4]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "可爱3",
            contentText: contentText,
            mediaItems: [
                mediaItems[5],
                mediaItems[2],
                mediaItems[4]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute4",
            contentText: contentText,
            mediaItems: [
                mediaItems[10],
                mediaItems[12],
                mediaItems[3]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute5",
            contentText: contentText,
            mediaItems: [
                mediaItems[9],
                mediaItems[8],
                mediaItems[4]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute6",
            contentText: contentText,
            mediaItems: [
                mediaItems[8],
                mediaItems[6],
                mediaItems[5]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute7",
            contentText: contentText,
            mediaItems: [
                mediaItems[2],
                mediaItems[1],
                mediaItems[9]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute8",
            contentText: contentText,
            mediaItems: [
                mediaItems[7],
                mediaItems[5],
                mediaItems[6]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute9",
            contentText: contentText,
            mediaItems: [
                mediaItems[11],
                mediaItems[7],
                mediaItems[9]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute10",
            contentText: contentText,
            mediaItems: [
                mediaItems[12],
                mediaItems[9],
                mediaItems[6]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute11",
            contentText: contentText,
            mediaItems: [
                mediaItems[4],
                mediaItems[10],
                mediaItems[5]
        ]}),
        new Butter({
            butterId: 1, userId: 2, type: "activeButter", title: "cute12",
            contentText: contentText,
            mediaItems: [
                mediaItems[10],
                mediaItems[12],
                mediaItems[6]
        ]}),
    ]
    
    res.json(butters)
}

async function _getByButterId(req, res) {
    const butterId = req.params.butterId
    const butter = await Butter.getByButterId(butterId)
    res.json(butter)
}

async function _getByUserId(req, res) {
    const userId = req.params.userId
    const butters = await Butter.getByUserId(userId)
    res.json(butters)
}

exports.create = function(req, res) {
    _create(req, res)
}

exports.getByButterId = function(req, res) {
    _getByButterId(req, res)
}

exports.getByUserId = function(req, res) {
    _getByUserId(req, res)
}

exports.getAll = function(req, res) {
    _getAll(req, res)
}