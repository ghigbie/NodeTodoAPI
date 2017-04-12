const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {mongoose}; //E6 object exported and condensed to one line
