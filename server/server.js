const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
        console.log("There was an error (400)");
    });
});

app.get("*", (req, res) => {
    res.send("This page is not found");
});

app.listen(3000, process.env.IP, () => {
    console.log("Server is up and listening on ");
});

module.exports = {app};
