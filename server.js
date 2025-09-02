const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// Set EJS as view engine
app.set("view engine", "ejs");


// for Loading index page
app.get("/", (req, res) => {
    res.render("index");
});


app.post("/submit", (req, res) => {
    res.render("result", { data: req.body });
});

app.listen(8080, () => {
    console.log("Server is listerning on port 8080");
});

