const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)  => {
    if(err){
        return console.log("Unable to connect the MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //findOneAndUpdate()
    db.collection("User").findOneAndUpdate({
        _id: new ObjectID("58e43ba640dc612b1c2ab32c")
    }, {
        $set: {
            name: "Alek"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    // db.collection("User").findOneAndUpdate({
    //     _id: new ObjectID("58e43ba640dc612b1c2ab32c")
    // }, {
    //     $set: {
    //         name: "Peter Pado"
    //     },
    //     $inc : {
    //         age: 1
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(results) => {
    //     console.log(JSON.stringify(results, undefined, 2));
    // });

    //db.close()
});
