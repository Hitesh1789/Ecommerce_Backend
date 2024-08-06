

const category_coll = require("../models/category.model")
const product_coll = require("../models/product.model")

exports.ProductsbyCategory = async (req,res)=>{

    try {
        // Extract the categoryId parameter from the URL
        const categoryId = req.params.categoryId;

        // Check if categoryId is provided
        if (!categoryId) {
            return res.status(400).send({ message : 'Category ID is required' });
        }

        // check if category id is valid or not 
        const category = await category_coll.findOne({ _id: categoryId });

        // if(!(category)){
        //     return res.status(420).send({ message : 'Provide a valid categoryId.' });
        // }

        //Find products with this categoryId
        const products = await product_coll.find({category : categoryId});

        return res.status(200).send(products);
    }
    
    catch (error) {
        console.error('Error while fetching data from database:', error);
        res.status(500).send({ message: 'Error while fetching data from database' });
    }
}