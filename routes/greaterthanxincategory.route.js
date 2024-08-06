
const products  = require("../controllers/greaterthanxincategory.controller")
const auth_middleware = require("../middlewares/auth.middleware")

module.exports = (app)=>{
    app.get("/ecomm/api/v1/categories/:categoryId/products/greaterthan/:x",auth_middleware.verifyToken,products.GreaterthanxinCategory)
}