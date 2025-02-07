// Express is a web framework which is used to built HTTP servers

// Importing the express library using require()
const express = require('express')

// Assigning the imported library to a variable
const app = express()
// Setting the port nummber
const port = 3000

// .get() method is a request method that can communicate to the server
app.get("/", (req, res) =>{
    res.send("Hello from Server!")
})

// .listen() method is used to start the server and keep on active
app.listen(port, ()=>console.log("Listening from "+port))