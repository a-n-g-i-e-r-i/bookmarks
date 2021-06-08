const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");

bookmarks.get("/", (req, res) => {
    res.status(200).json(bookmarksArray);
});

module.exports = bookmarks;