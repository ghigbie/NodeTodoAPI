const {mongoose} = require(./../server/db/mongoose),
          {Todo} = require(./../server/models/todo);

let id = "59093cd4c7897f9766717970";

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todo);
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
