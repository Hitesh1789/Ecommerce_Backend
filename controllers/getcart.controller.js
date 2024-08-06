

//  GET localhost:3000/ecomm/api/v1/carts

const cart_model = require("../models/cart.model") 

exports.getCart = async (req,res)=>{
    try {
        // Extract the cartId parameter from the URL
        const cartId = req.params.cartId;

        // Check if cartId is provided
        if (!cartId) {
            return res.status(400).send({ error: 'cartId is required' });
        }

        // Process the cartId, for example, you can use it to fetch data from a database
        const cart = await cart_model.findOne({ _id: cartId });

        if(!(cart)){
            return res.status(420).send({message : 'No valid cart'})
        }

        return res.status(200).send(cart);
    }
    
    catch (error) {
        console.log('Error while fetching data from database:', error);
        res.status(500).send({ message: 'Error while fetching data from database' });
    }
}