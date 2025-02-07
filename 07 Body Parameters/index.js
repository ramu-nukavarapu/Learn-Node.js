import express from 'express'
import body from 'body-parser'

const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.send("Hi from the server")
})

// body parameters are similar to query params and headers but there is no direct method for body like querys and headers in req object
// to add the body object into req, we have to use body-parser middleware

app.use(body.json()) // middleware to add body into the req object

app.get("/sum", (req,res)=>{
    const val1 = parseInt(req.body.val1)
    const val2 = parseInt(req.body.val2)

    res.status(202).send("Sum is "+(val1+val2))
})

app.listen(port, ()=>console.log("Listening from the port: "+port))