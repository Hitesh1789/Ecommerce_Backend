

//  POST localhost:3000/ecomm/api/v1/products

const category_controller = require("../controllers/product.controller") 
const auth_middleware = require("../middlewares/auth.middleware")
const product_middleware = require("../middlewares/product.middleware")
module.exports= (app)=>{
    app.post("/ecomm/api/v1/products",[auth_middleware.verifyToken , auth_middleware.isAdmin,product_middleware.verifyProductBody], category_controller.createNewProduct)
}