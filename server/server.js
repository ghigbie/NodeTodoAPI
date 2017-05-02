const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
        console.log("There was an error: ", e);
    });
});

app.get("*", (req, res) => {
    res.send("This page is not found");
});

let port = 3010;
app.listen(port, process.env.IP, () => {
    console.log(`Server is up and listening on ${port}.`);
});

module.exports = {app};
