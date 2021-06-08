// DEPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();
const bookmarksController = require("./controllers/bookmarksController.js");

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Bookmarks App!");
});

app.use("/bookmarks", bookmarksController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found.");
});

// EXPORT
module.exports = app;