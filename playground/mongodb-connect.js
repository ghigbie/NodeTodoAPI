//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var user = {name: "Joe", age: 67};
var {name} = user;
console.log(name);

//the first argument for a mongoClient.connect cold be any url from any site


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if(err){
        return console.log("Unable to connect the MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert todo.", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection("Users").insertOne({
        name: "Bobby McGee",
        age: 43,
        location: "New York, NY"
    }, (err, result) => {
        if(err){
            return console.log("Unable to insert user", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});
