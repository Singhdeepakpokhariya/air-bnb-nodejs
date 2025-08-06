// Core Modules 
const path  = require("path")
// External Modules
const express = require("express")
const hostRouter  = express.Router()
// Local Modules
const rootDir = require('../utiles/path')


hostRouter.get('/add-home',(req,res,next)=>{
// res.sendFile(path.join(rootDir,'views','addHome.html'))
res.render("addHome",{pageTitle:"Add Home to airbnb"})

})
let registeredHomes = []
hostRouter.post("/add-home",(req,res,next)=>{
registeredHomes.push({houseName: req.body.houseName})

// for Html    
// res.sendFile(path.join(rootDir,'views','homeAdded.html'))

// for ejs
res.render("homeAdded",{pageTitle:"Home Added Successfully"})
    
})

exports.hostRouter  = hostRouter
exports.registeredHomes = registeredHomes