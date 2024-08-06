
const products  = require("../controllers/lessthanx.controller")
const auth_middleware = require("../middlewares/auth.middleware")

module.exports = (app)=>{
    app.get("/ecomm/api/v1/products/lessthan/:x",auth_middleware.verifyToken,products.Lessthanx)
}