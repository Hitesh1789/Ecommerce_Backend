
const product_model = require("../models/product.model")

exports.verifyProductBody = async (req,res,next)=>{
    try{
        //Check if the productName is provided in request body 
        if(!req.body.productName){
            return res.status(400).send({
                message  : "Failed ! productName is not provided in request body."
            })
        }
        
        //Check if the description is provided in request body 
        if(!req.body.description){
            return res.status(400).send({
                message  : "Failed ! description is not provided in request body."
            })
        }
        //Check if the performanceSpecs is provided in request body 
        if(!req.body.performanceSpecs){
            return res.status(400).send({
                message  : "Failed ! performanceSpecs is not provided in request body."
            })
        }
        //Check if the pricing is provided in request body 
        if(!req.body.pricing){
            return res.status(400).send({
                message  : "Failed ! pricing is not provided in request body."
            })
        }
        //Check if the inventaryLevels is provided in request body 
        if(!req.body.inventaryLevels){
            return res.status(400).send({
                message  : "Failed ! inventaryLevels is not provided in request body."
            })
        }
        //Check if the category(categoryId) is provided in request body 
        if(!req.body.category){
            return res.status(400).send({
                message  : "Failed ! category is not provided in request body."
            })
        }

        

        const  product = await product_model.find({productName : req.body.productName});
        if(product){
            return res.status(400).send({
                message  : "Failed ! Product with same productName is already  present."
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