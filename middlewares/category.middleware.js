
const category_model = require("../models/category.model")

exports.verifyCategoryBody = async (req,res,next)=>{
    try{
        //Check if the name is provided in request body 
        if(!req.body.name){
            return res.status(400).send({
                message  : "Failed ! name is not provided in request body."
            })
        }
        
        //Check if the description is provided in request body 
        if(!req.body.description){
            return res.status(400).send({
                message  : "Failed ! description is not provided in request body."
            })
        }

        const category = await category_model.find({name : req.body.name});
        if(category){
            return res.status(400).send({
                message  : "Failed ! Category with same name is already  present."
            })
        }
        
        next()
    }

    catch(err){
        console.log("Error while validating request body.")
        return res.status(500).send({
            message : "Error while validating request body."
        })
    }

}