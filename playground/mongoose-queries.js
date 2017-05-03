const {mongoose} = require("./../server/db/mongoose"),
          {Todo} = require("./../server/models/todo");

let id = "59093ea741c08dbc665470fc";

Todo.find({
    _id: id
}).then((todos) => {
    console.log("Todos: ", todos);
}, (e) => {
    console.log("There was an error: ", e);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log("The one todo: ", todo);
}, (e) => {
    console.log("There was an error: ", e);
});

Todo.findById(id).then((todo) => {
    console.log("Found one object by ID: ", todo)
}, (e) => {
    console.log("There was an error: ", e);
});
