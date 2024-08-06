


const put_category = require("../models/category.model")

exports.put_categorybyId = async (req, res) => {

    //extract product id from URI
    const categoryId = req.params.categoryId;

    try {
        if (!categoryId) {
            return res.status(400).send({
                message: "Please provide categoryId"
            });
        }

        //fetch data from database if it is valid id
        const category = await put_category.findOne({ _id: categoryId });

        if (!category) {
            return res.status(404).send({
                message: 'Please enter a valid category id'
            });
        }


    }
    catch(err){
        console.log("Error while fetching data",err)
        return res.status(500).send({ message: 'Error while fetching data' });
    }

    try{
        const updatedcategory = await put_category.findByIdAndUpdate(categoryId, req.body, { new: true });
        res.status(200).send(updatedcategory);
    }
        
    catch (err) {
        console.log("Error while updating data",err)
        return res.status(500).send({ message: 'Error while  updating data' });
    }

}