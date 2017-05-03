const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose"),
          {Todo} = require("./../server/models/todo"),
          {User} = require("./../server/models/user");

let todoID = "59093ea741c08dbc665470fc";
let userID = "58ec3b14fed67ccb360c0274";

if(!ObjectID.isValid(todoID)){
    console.log("The Todo ID is not valid.");
}

if(!ObjectID.isValid(userID)){
    console.log("The User ID is not valid.");
}

Todo.find({
    _id: todoID
}).then((todos) => {
    console.log("Todos: ", todos);
}, (e) => {
    console.log("There was an error: ", e);
});

Todo.findOne({
    _id: todoID
}).then((todo) => {
    if(!todo){
        return console.log("ID was not found in the database");
    }
    console.log("The one todo: ", todo);
}, (e) => {
    console.log("There was an error: ", e);
});

Todo.findById(todoID).then((todo) => {
    if(!todo){
        return console.log("ID was not found in the database");
    }
    console.log("Found one object by ID: ", todo);
}).catch((e) => console.log(e));

User.find({
    _id: userID
}).then((users) => {
    console.log("Users: ", users);
}, (e) => {
    console.log("There was an error: ", e);
});

User.findOne({
    _id: userID
}).then((user) => {
    if(!user){
        return console.log("ID was not found in the database");
    }
    console.log("Found one user ID: ", user);
}, (e) => {
    console.log("There was an error ", e);
});

User.findById({
    _id: userID
}).then((user) => {
    if(!user){
        return console.log("ID was not found in the database");
    }
    console.log("Found one user by ID: ", user);
}).catch((e) => console.log(e));
