



//Controller to create new cart by user
// POST localhost:3000/ecomm/api/v1/carts

const cart_model = require("../models/cart.model")

exports.createNewCart = async (req,res) =>{

    //Read the request body
    const cart_obj={
        userObjId : req.body.userObjId,
        items :  req.body.items,
        cost  : req.body.cost
    }

    try {
        //Insert into mongodb
        const cart = await cart_model.create(cart_obj);
    
        //Return the cart object
        return res.status(200).send(cart)
        
    } 
    
    catch (err) {
        console.log("Error while inserting to database",err);
        return res.status(500).send({message : "Error while inserting cart to database."})
    }
}