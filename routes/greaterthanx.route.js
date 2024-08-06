

const products  = require("../controllers/greaterthanx.controller")
const auth_middleware = require("../middlewares/auth.middleware")

module.exports = (app)=>{
    app.get("/ecomm/api/v1/products/greaterthan/:x",auth_middleware.verifyToken,products.Greaterthanx)
}