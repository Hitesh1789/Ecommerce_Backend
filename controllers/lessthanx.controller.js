

const product_coll = require("../models/product.model")

exports.Lessthanx = async (req,res)=>{
    
    try{

        const x = req.params.x;

        
        if (!x) {
            return res.status(400).send({ message : 'x is required' });
        }
        
        const numx = Number(x);
        
        if (isNaN(numx)) {
            return res.status(400).send({ message: 'x must be a valid number' });
        }
        
        const products = await product_coll.find({pricing : {$lt:numx}})
        
        res.status(200).send(products)
    } 

    catch(err){
        console.log('Error while fetching data from database:', err);
        res.status(500).send({ message: 'Error while fetching data from database' });
    }
}