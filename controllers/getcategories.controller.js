

const create_category = require("../models/category.model")

exports.showCategories = async (req,res)=>{
    
    //Showing all categories
    
    try{
        const Categories = await create_category.find()
        res.status(200).send(Categories)
    }

    catch(err){
        console.log("Error while  fetching data from database. ",err)
        res.status(500).send({
            message : "Error while fectching data from database."
        })
    }
    
}