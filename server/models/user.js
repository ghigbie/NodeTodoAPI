const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({

});


var User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true //removes any leading or trailing whitespace
    }
});

module.exports = {User};
