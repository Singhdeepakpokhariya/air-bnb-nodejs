// Core Module 
const http  = require("http")
const path  = require("path")
// External Module 
const express = require("express")
// Local modules
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utiles/path")

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(userRouter)
app.use("/host",hostRouter)


// Granding access to public folder
app.use(express.static(path.join(rootDir,'public')))


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})


const server = http.createServer(app)

const PORT =  8080
server.listen(PORT,()=>{
console.log(`Server running at http://localhost:${PORT}`)
})