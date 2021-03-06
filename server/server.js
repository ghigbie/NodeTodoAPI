const express    = require("express"),
      bodyParser = require("body-parser"),
      {ObjectID} = require("mongodb");

const {mongoose} = require("./db/mongoose"),
          {Todo} = require("./models/todo"),
          {User} = require("./models/user");

const app = express();
const port = process.env.PORT || 3010;

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
app.get("/todos/:id", (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send();
        return console.log("ID is not valid. No object could be found");
    }
    Todo.findById({
        _id: id
    }).then((todo) => {
        if(!todo){
            res.status(404).send();
            return console.log("This is not a valid todo");
        }
        res.send({todo});
        console.log("One todo was found: ", JSON.stringify(todo, undefined, 2));
    }, (e) => {
        res.status(400).send();
        console.log("There was an error: ", e);
    });
});


app.get("*", (req, res) => {
    res.send("This page is not found");
});

app.listen(port, process.env.IP, () => {
    console.log(`Started up at port ${port}.`);
});

module.exports = {app};
