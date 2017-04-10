const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)  => {
    if(err){
        return console.log("Unable to connect the MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //deteleMany
        db.collection("Todos").deleteMany({text: "Something to do"});

    //deleteOne


    //findOneAndDelete

    //db.close()
});
