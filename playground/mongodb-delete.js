const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)  => {
    if(err){
        return console.log("Unable to connect the MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //deteleMany
        // db.collection("Todos").deleteMany({text: "Something to do"}).then((result) => {
        //     console.log(result);
        // });

    //deleteOne
        // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
        //     console.log(result);
        // });

    //findOneAndDelete
    db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
            console.log(result);
    });

    //db.close()
});
