import express from 'express'
import body from 'body-parser'

const app = express()
const port = 3000


// Status Codes are standards that are used for passing the Information about the response based on the different situations
// There are set of standard boundaries for different types of status codes.

    // 100 - 199 -> Informational status codes
    // 200 - 299 -> Successful status codes
    // 300 - 399 -> Redirectional status codes
    // 400 - 499 -> Client Error status codes
    // 500 - 599 -> Server Error status codes

// The status codes are set by using the res.status(statuscode) method whereas status code is a number that is between 100 - 599

app.get("/info", (req,res)=>{
    res.status(101).send("Informational status code")
})

app.get("/sucess", (req,res)=>{
    res.status(202).send("Successful status code")
})

app.get("/redirect", (req,res)=>{
    res.status(303).send("Redirectional status code")
})

app.get("/client", (req,res)=>{
    res.status(404).send("Client Error status code")
})

app.get("/server", (req,res)=>{
    res.status(505).send("Server Error status code")
})

// You can observe these status codes via postman or network tab in your browser


app.listen(port, ()=>console.log("Listening from the port: "+port))