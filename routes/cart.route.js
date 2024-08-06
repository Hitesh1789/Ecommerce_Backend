


//  POST localhost:3000/ecomm/api/v1/carts

const cart_controller = require("../controllers/cart.controller") 
const auth_middleware = require("../middlewares/auth.middleware")
const cart_middleware  = require("../middlewares/cart.middleware")

module.exports= (app)=>{
    app.post("/ecomm/api/v1/carts",[auth_middleware.verifyToken,cart_middleware.verifyCartBody], cart_controller.createNewCart)
}