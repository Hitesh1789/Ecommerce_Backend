




const create_categoryid = require("../models/category.model")
// const express = require("express");

exports.getCategoryById = async (req, res) => {

    try {
        // Extract the categoryId parameter from the URL
        const categoryId = req.params.categoryId;

        // Check if categoryId is provided
        if (!categoryId) {
            return res.status(400).send({ error: 'Category ID is required' });
        }

        // Process the categoryId, for example, you can use it to fetch data from a database
        const category = await create_categoryid.findOne({ _id: categoryId });

        if(!(category)){
            return res.status(420).send({message : 'No valid category'})
        }

        res.status(200).send(category);
    }
    
    catch (error) {
        console.error('Error while fetching data from database:', error);
        res.status(500).send({ message: 'Error while fetching data from database' });
    }
}
