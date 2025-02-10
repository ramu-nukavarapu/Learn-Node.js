import express from 'express'
import path from "path"

const app = express()
const port = 3000


// response is the way to give information for the corresponding request.
// for every route, In the handler we pass two objects req, res refers request and response
// using the res object, you can send the different types of responses.


// Here are most used one's

// text response
app.get("/text",(req,res)=>{
    res.send("Hi from the server")
})

// json response
app.get("/json",(req,res)=>{
    res.json({message:"Hi from the server"})
})

// file response
app.get("/file",(req,res)=>{
    res.sendFile(process.cwd() + "/index.js")
})

app.listen(port, ()=>console.log("Listening from the port: "+port))