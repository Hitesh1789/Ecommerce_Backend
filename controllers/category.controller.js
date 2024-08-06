


//Controller to create new category
// POST localhost:3000/ecomm/api/v1/categories
const category_model = require("../models/category.model")

exports.createNewCategory = async (req,res)=>{
    
    //Read the request body 
    //create the category object
    const cat_obj={
        name : req.body.name,
        description : req.body.description
    }

    try{
        //Insert into mongodb
        const category = await category_model.create(cat_obj)
        return res.status(201).send(category)
        
    }
    
    catch(err){
        console.log("Error while creating the category",err);
        return res.status(500).send({
            message : "Error while creating category "
        })
    }
    
    //return the response the category created


}

