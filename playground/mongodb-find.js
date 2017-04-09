const {MongoClient, ObjectID} = require "mongodb";

MongoClient.connet("mongodb:///localhost:27017/TodoApp", (err, db) => {
    if(err){
        return console.log("Unable to connect the MongoDB server");
    }
    console.log("Connected to MongoDB server");

    db.collections.find().toArray().then({
        console.log("Todos:");
        console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log("Unable to fetch todos", err);
        });
});
