const mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true //"trim" set to true will remove any leading or trailing white space
    },

    completed: {
        type: Boolean,
        default: false
    },

    completedAt: {
        type: Number,
        defalut: null
    }
});

module.exports = {Todo};
