const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)  => {
    if(err){
        return console.log("Unable to connect the MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos").find({
    //     _id: new ObjectID("58e9d32d3703b3f820402993")
    // }).toArray().then((docs) => {
    //     console.log("Todos:");
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log("Unable to fetch todos", err);
    //     });

    // db.collection("Todos").find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });
    db.collection("Users").find({name: "Bobby McGee"}).toArray().then((docs) => {
        console.log("User:");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch user", err);
    });
});
