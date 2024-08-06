
const cart_model = require("../models/category.model")

exports.verifyCartBody = async (req,res,next)=>{
    try{
        //Check if the userObjId is provided in request body 
        if(!req.body.userObjId){
            return res.status(400).send({
                message  : "Failed ! userObjId is not provided in request body."
            })
        }
        
        //Check if the items is provided in request body 
        if(!req.body.items){
            return res.status(400).send({
                message  : "Failed ! items is not provided in request body."
            })
        }

        //Check if the cost is provided in request body 
        if(!req.body.cost){
            return res.status(400).send({
                message  : "Failed ! cost is not provided in request body."
            })
        }

        const cart = await cart_model.find({userObjId : req.body.userObjId});
        if(cart){
            return res.status(400).send({
                message  : "Failed ! Cart with same userObjId is already  present."
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