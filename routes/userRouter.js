// Core Modules 
const path  = require("path")
// External Modules
const express = require("express")
const userRouter  = express.Router()
// Local Modules
const rootDir =  require('../utiles/path')
const {registeredHomes} = require("./hostRouter")

userRouter.get('/',(req,res,next)=>{
  console.log("req",req.path)

// This for simple html file
// res.sendFile(path.join(rootDir,'views','home.html'))  
console.log("registeredHomes",registeredHomes);

// For ejs
res.render("home",{registeredHomes: registeredHomes , pageTitle:"airbnb Home"}) 
})



module.exports  = userRouter