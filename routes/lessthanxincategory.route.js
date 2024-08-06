

const products  = require("../controllers/lessthanxincategory.controller")
const auth_middleware = require("../middlewares/auth.middleware")

module.exports = (app)=>{
    app.get("/ecomm/api/v1/categories/:categoryId/products/lessthan/:x",auth_middleware.verifyToken,products.GreaterthanxinCategory)
}