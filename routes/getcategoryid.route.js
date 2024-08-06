


// GET /ecomm/api/v1/categories/:categoryId [Logged in User]	
const getCategoryid = require("../controllers/getcategoryid.controller")
const verifyuserToken = require("../middlewares/auth.middleware")

module.exports = (app)=>{
    app.get("/ecomm/api/v1/categories/:categoryId",[verifyuserToken.verifyToken],getCategoryid.getCategoryById)
}