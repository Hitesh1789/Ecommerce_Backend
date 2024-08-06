

const product_coll = require("../models/product.model")

exports.GreaterthanxinCategory = async (req,res)=>{
    
    try{    
        const x = req.params.x;
        const categoryId = req.params.categoryId;
        
        if (!x) {
            return res.status(400).send({ message : 'x is required' });
        }

        if (!categoryId) {
            return res.status(400).send({ message : 'categoryId is required' });
        }

        const numx = Number(x);
        
        if (isNaN(numx)) {
            return res.status(400).send({ message: 'x must be a valid number' });
        }

        
        const products = await product_coll.find({pricing : {$lt : numx} , category : categoryId} );
        
        res.status(200).send(products)
    } 

    catch(err){
        console.log('Error while fetching data from database:', err);
        res.status(500).send({ message: 'Error while fetching data from database' });
    }
}