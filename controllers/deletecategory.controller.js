

const category_model = require("../models/category.model")

exports.deleteCategorybyId = async (req,res)=>{

    // Extract the categoryId parameter from the URI
    const categoryId = req.params.categoryId;

    try {

        // Check if categoryId is provided
        if (!categoryId) {
            return res.status(400).send({ 
                message : 'Category ID is required' 
            });
        }

        // fetch data from a database
        const category = await category_model.findOne({ _id: categoryId });

        if(!category){
            return res.status(404).send({ 
                message : 'Please enter a valid category id'
            });
        }
        
    }
    
    catch (error) {
        console.error('Error while fetching data from database:', error);
        return res.status(500).send({ message: 'Error while fetching data from database' });
    }

    
    try {
        const result = await category_model.deleteOne({ _id: categoryId });
        if (result.deletedCount == 0) {
            return res.status(500).send({ message: 'Error while deleting category' });
        }
        return res.status(200).send({ message: "Category deleted successfully" });

    } 
    
    catch (err) {
        console.log("Error while deleting category:", err);
        return res.status(500).send({ message: 'Error while deleting category' });
    }
}