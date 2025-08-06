// Core Module 
const http  = require("http")
const path  = require("path")
// External Module 
const express = require("express")
// Local modules
const userRouter = require("./routes/userRouter")
const {hostRouter} = require("./routes/hostRouter")
const rootDir = require("./utiles/path")

const app = express()
app.set("view engine", "ejs")
app.set("views","views")
app.use(express.urlencoded({extended:true}))
app.use(userRouter)
app.use("/host",hostRouter)

// Granding access to public folder
app.use(express.static(path.join(rootDir,'public')))


app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(rootDir,'views','404.html'))
      res.status(404).render('404', {pageTitle: 'Page Not Found'});
})


const server = http.createServer(app)

const PORT =  8080
server.listen(PORT,()=>{
console.log(`Server running at http://localhost:${PORT}`)
})