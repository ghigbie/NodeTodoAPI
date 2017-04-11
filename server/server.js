const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1
    },

    completed: {
        type: Boolean
    },

    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: "",
    completed: false,
    completedAt: 5
});

newTodo.save().then((doc) => { //this method saves the todo to the database
    console.log("Saved todo", doc);
}, (e) => {
    console.log("Unable to save todo", e)
});
