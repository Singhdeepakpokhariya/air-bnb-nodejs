// Core Modules 
const path  = require("path")
// External Modules
const express = require("express")
const hostRouter  = express.Router()
// Local Modules
const rootDir = require('../utiles/path')


hostRouter.get('/add-home',(req,res,next)=>{
res.sendFile(path.join(rootDir,'views','addHome.html'))
})

hostRouter.post("/submit-home",(req,res,next)=>{
res.sendFile(path.join(rootDir,'views','homeAdded.html'))
    
})

module.exports  = hostRouter