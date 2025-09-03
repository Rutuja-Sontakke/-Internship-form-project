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

let users = [];

app.post("/submit", (req, res) => {
    const {name, email, password} = req.body;

    if(!name || name.length < 3) {
        return res.send("Invalid name");
    }
   
    if(!email.includes("@")) {
        return res.send("Invalid email");
    }
   
    if(password.length < 6) {
        return res.send("Password is too short");
    }
   
    if(password !== confirmpassword) {
        return res.send("Password do not match");
    }

    users.push({name, email, password }); //storing data in array for better 

    return res.send("Registered Successfully!")
});


app.listen(8080, () => {
    console.log("Server is listerning on port 8080");
});
