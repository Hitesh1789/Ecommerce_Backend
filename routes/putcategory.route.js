
const put_controllerid = require("../controllers/putcategory.controller");
const auth_middleware = require("../middlewares/auth.middleware");

module.exports = (app)=>{
    app.put("/ecomm/api/v1/categories/:categoryId",[auth_middleware.verifyToken , auth_middleware.isAdmin], put_controllerid.put_categorybyId);
}