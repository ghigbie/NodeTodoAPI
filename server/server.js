const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
const {Todo} = require("./models/todo");
const {User} = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    console.log(req.body);
});

app.get("*", (req, res) => {
    res.show("This page is not found");
});

app.listen(3000, process.env.IP, () => {
    console.log("Server is up and listening on ");
});
