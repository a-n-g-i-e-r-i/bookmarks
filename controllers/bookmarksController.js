const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");

const validateUrl = (req, res, next) => {
    const http = "http://";
    const https = "https://";
    var fullUrl = req.protocol + '://' + req.get('host') + req.url;
    console.log(`[development] Request URL: ${fullUrl}`);
    if (
        fullUrl.substring(0, 7) === http ||
        fullUrl.substring(0, 8) === https
    ) {
        return next();
    } else {
        res
        .status(400)
        .send(`Oops, you forgot to start your url with http:// or https://`);
    }
    };

bookmarks.use(validateUrl);

bookmarks.get("/", (req, res) => {
    res.status(200).json(bookmarksArray);
});

bookmarks.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if(bookmarksArray[arrayIndex]) {
        res.status(200).json(bookmarksArray[arrayIndex - 1]);
    } else {
        res.redirect("/404");
    };
});

bookmarks.post("/", (req, res) => {
    // Create the new resource
    bookmarksArray.push(req.body);
    // Send back the new resource as confirmation
    res.json(bookmarksArray[bookmarksArray.length - 1]);
});


module.exports = bookmarks;
