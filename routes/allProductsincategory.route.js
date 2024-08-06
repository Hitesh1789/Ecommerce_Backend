
// Get All the products in a Category : GET /eCom/v1/api/categories/:categoryId/products [Logged in User]

const prodCategory  = require("../controllers/allProductsincategory.controller")
const auth_middleware = require("../middlewares/auth.middleware")

module.exports = (app)=>{
    app.get("/ecomm/api/v1/categories/:categoryId/products",auth_middleware.verifyToken,prodCategory.ProductsbyCategory)
}