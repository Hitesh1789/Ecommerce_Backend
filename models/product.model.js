

const mongoose = require("mongoose");


//store information about products
const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    performanceSpecs : {
        type : String,
        required : true
    },
    pricing : {
        type : Number,
        required : true
    },
    inventaryLevels : {
        type : Number,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true,
        unique : true 
    }

},{timestamps:true , versionKey:false})

module.exports = mongoose.model("Product",productSchema)