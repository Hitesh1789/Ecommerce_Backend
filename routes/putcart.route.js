
const put_controller = require("../controllers/putcart.controller");
const auth_middleware = require("../middlewares/auth.middleware");

module.exports = (app)=>{
    app.put("/ecomm/api/v1/carts/:cartId",[auth_middleware.verifyToken], put_controller.put_cartbyId);
}