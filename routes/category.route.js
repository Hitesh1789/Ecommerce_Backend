

//  POST localhost:3000/ecomm/api/v1/categories

const category_controller = require("../controllers/category.controller") 
const auth_middleware = require("../middlewares/auth.middleware")
const categories_middleware  = require("../middlewares/category.middleware")
module.exports= (app)=>{
    app.post("/ecomm/api/v1/categories",[auth_middleware.verifyToken , auth_middleware.isAdmin , categories_middleware.verifyCategoryBody],category_controller.createNewCategory)
}