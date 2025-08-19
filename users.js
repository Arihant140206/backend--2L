//require and setup mongodb connection

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practicedb")
//making schema matlab documents in collection (sabse chota unit)

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age:Number
});

module.exports = mongoose.model("user",userschema);