import express from 'express'

const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.send("Hi from the server")
})

// Query Parameters are parameters that comes from the URL route while sending the request
// These are appended with the URL with '?' character and add variables with values to it.
// The Query parameters can be accessed using 'req.query.Variable' object and the variables passed in the URL

app.get("/sum", (req,res)=>{
    const val1 = parseInt(req.query.val1)
    const val2 = parseInt(req.query.val2)

    res.status(202).send("Sum is"+(val1+val2))
})

app.listen(port, ()=>console.log("Listening from the port: "+port))