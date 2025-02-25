const mongoose = require("mongoose")

/*
User Name
User Id
Password
Email
User Type
*/

const userschema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        minLength : 10,
        lowercase  :true,
        required : true,
        unique : true
    },
    userType : {
        type : String,
        required : true,
        default : "Customer",
        enum : ["Customer" , "Admin"]
    }
},{timestamps : true , versionKey : false})

module.exports = mongoose.model("user",userschema) //Convert file into modules //Creating users collection