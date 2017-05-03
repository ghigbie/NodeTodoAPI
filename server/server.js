const express    = require("express"),
      bodyParser = require("body-parser");

const {mongoose} = require("./db/mongoose"),
      {objectID} = require("mongoose"),
          {Todo} = require("./models/todo"),
          {User} = require("./models/user");

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

//CREATE ROUTE - shows all routes
app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos}); //sending an objec instead of an array allows for more flexibility
    }, (e) => {
        res.status(400).send(e);
        console.log("There was an error: ", e);
    });
});

//SHOW ROUTE - shows individual todo
app.get("/todo/:id", (req, res) => {
    Todo.findOne({
        _id: id
    }).then((todo) => {
        res.send(({todo}));
        console.log("One todo found: ", JSON.stringify(todo, undefined, 2));
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
