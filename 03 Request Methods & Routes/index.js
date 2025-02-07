const express = require("express")

const app = express()
const port = 3000

// Request methods are standard way to communicate and perform operations with the HTTP server
// There are many request methods available, each can do a specific task, we basically use four request methods:

    // GET 
    // POST
    // PUT
    // DELETE

// Any request method takes two parameters:
    // route -> string
    // callback -> function

// Routes are paths to the specific portions of the server, based on the routes the request method callbacks will vary
// These request methods can  only accessed by valid routes. Otherwise, server throws errrors


// .get() -> GET method => used for retreiving the data from the server
app.get("/route", (req, res)=>{
    res.send("GET method")
})
// By Default, server calls .get("/", callback) with '/' route


// .post() -> POST method => used for sending the data to the server
app.post("/route", (req, res)=>{
    res.send("POST method")
})


// .put() -> PUT method => used for updating the data in the server
app.put("/route", (req, res)=>{
    res.send("PUT method")
})


// .delete() -> DELETE method => used for deleting the data from the server
app.delete("/route", (req, res)=>{
    res.send("DELETE method")
})


// Ignore the callack bodies, I showed for demonstration, You should change the body as your requirements changes based on the project.

app.listen(port, ()=>console.log("Listening from port: "+port))