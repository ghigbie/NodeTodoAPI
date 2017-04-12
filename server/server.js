const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose");
const {Todo} = require("./model/todo");
const {User} = require("./model/user");

const app = express();



app.listen(3000, process.env.IP, () => {
    console.log("Server is up and listening on ");
});
