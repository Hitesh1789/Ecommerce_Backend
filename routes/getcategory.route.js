




//GET /ecomm/api/v1/categories [Logged in User]
const getcategory_controller = require("../controllers/getcategories.controller")
const verifyuserToken = require("../middlewares/auth.middleware")

module.exports = (app)=>{
    app.get("/ecomm/api/v1/categories",[verifyuserToken.verifyToken], getcategory_controller.showCategories)
}