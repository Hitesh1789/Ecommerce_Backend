
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userObjId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user' , //reference to users collection
        unique : true,
        required : true
    },
    items :[
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Product',   //reference to products collection
                required : true
            },
            quantity : {
                type : Number,
                required : true,
                default : 1
            }
        }
    ]
    ,
    cost : {
        type : Number,
        required : true
    }
},{timestamps:true , versionKey : false})

module.exports = mongoose.model("Cart",cartSchema) 