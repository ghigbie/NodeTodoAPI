const MongoClient = require("mongodb").MongoClient;

var user = {name: "Joe", age: 67};
var {name} = user;
console.log(name);



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
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection("User").insertOne({
    //     name: "Billy Bob",
    //     age: 45,
    //     location: "Phoenix, AZ",
    //
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert todo", err);
    //     }
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })
    db.close();
});
