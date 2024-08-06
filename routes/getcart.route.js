
//  GET localhost:3000/ecomm/api/v1/carts

const cart_controller = require("../controllers/getcart.controller") 
const auth_middleware = require("../middlewares/auth.middleware")

module.exports= (app)=>{
    app.get("/ecomm/api/v1/carts/:cartId",[auth_middleware.verifyToken], cart_controller.getCart)
}