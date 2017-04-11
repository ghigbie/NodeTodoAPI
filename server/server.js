const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    completed: {
        type: Boolean,
        default: false
    },

    completedAt: {
        type: Number,
        defualt: null
    }
});

var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var newTodo = new Todo({
//     text: "    Meow at the moon     ",
//     completed: false,
//     completedAt: 5
// });

var newUser = new User({
    email: "    adfada@email.com    "
})

// newTodo.save().then((doc) => { //this method saves the todo to the database
//     console.log("Saved todo", doc);
// }, (e) => {
//     console.log("Unable to save todo", e)
// });

newUser.save().then((doc) => {
    console.log("Saved user", doc);
}, (e) => {
    console.log("Unable to save user", e)
});
