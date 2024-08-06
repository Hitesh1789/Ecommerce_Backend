
const delete_category = require("../controllers/deletecategory.controller");
const middleware = require("../middlewares/auth.middleware");

module.exports = (app)=>{
    app.delete("/ecomm/api/v1/categories/:categoryId",[middleware.verifyToken , middleware.isAdmin],delete_category.deleteCategorybyId);
}