


//This is the starting file of the project 

const express = require("express")
const mongoose = require("mongoose")
const app = express()
const serverconfigs = require("./configs/server.config.js")
const dbconfigs = require("./configs/db.confing.js")
const user_model = require("./models/user.model.js")
const bcrypt = require("bcryptjs")


app.use(express.json()) // Convert json to jsobject

//Create the admin user at the starting of the app
//if not admin is already present 

//Connection with database
mongoose.connect(dbconfigs.db_url)

const db = mongoose.connection

db.on("error", () => {
    console.log("Error while connecting to db.")
})

db.once("open", () => {
    console.log("Connected with db.")
    init()
})

async function init() {

    try {
        let user = await user_model.findOne({ userId: "admin" })

        if (user) {
            console.log("Admin user is already present .", user)
            return
        }
    } catch (err) {
        console.log("Error while reading the data ", err)
    }

    try {
        user = await user_model.create({
            userName: "SiyaRam",
            userId: "admin",
            email: "hiteshmehandiratta@gmail.com",
            userType: "Admin", 
            password: bcrypt.hashSync("JaiMataDi", 8)
        })
        console.log("Admin created .", user)
    } catch (err) {
        console.log("Error while creating admin", err)
    }
}


//Stich all routes to the server or connect with route

require("./routes/auth.route")(app)
require("./routes/category.route")(app)
require("./routes/getcategory.route.js")(app)
require("./routes/getcategoryid.route.js")(app)
require("./routes/putcategory.route.js")(app)
require("./routes/deletecategory.route.js")(app) 
require("./routes/product.route.js")(app) 
require("./routes/getproducts.route.js")(app) 
require("./routes/getproductid.route.js")(app) 
require("./routes/putproduct.route.js")(app) 
require("./routes/deleteproduct.route.js")(app) 
require("./routes/allProductsincategory.route.js")(app )
require("./routes/allProductsincategory.route.js")(app )
require("./routes/greaterthanx.route.js")(app)
require("./routes/lessthanx.route.js")(app)
require("./routes/greaterthanxincategory.route.js")(app)
require("./routes/lessthanxincategory.route.js")(app)
require("./routes/cart.route.js")(app)
require("./routes/cart.route.js")(app)
require("./routes/getcart.route.js")(app)
require("./routes/putcart.route.js")(app)

//Start the server
app.listen(serverconfigs.Port, () => {
    console.log("Server is Started at port num : ", serverconfigs.Port)
})
