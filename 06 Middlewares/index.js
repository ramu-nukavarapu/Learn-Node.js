import express from 'express'

const app = express()
const port = 3000

// Middleware is a function which executes before the actual request methods. It provides a kind of validation.
// Middleware has two phases:
    // middleware creation
    // middleware registration

// Middleware creation is process of creating the function with the required logic to validate the request before reach the server.
function GetMiddleware(req,res,next) { // Middleware Creation
    console.log("val1: "+req.headers.val1)
    console.log("Val2: "+req.headers.val2)
    next()
}

function sumMiddleware(req,res,next) {
    console.log("The sum function Middleware")
    next()
}
// Middleware registration is the actual process of registering the middleware, which leads to execute before the request sends to the server.
// For registering the middleware, we use app.use() which takes a function as a parameter, that function is the middleware function
app.use(GetMiddleware) 

// By using app.use(), the middleware function is applied to every request method. But you can also add route/request specific middlewares by passing the       middleware function before the handler in the request.

app.get("/",(req,res)=>{
    res.send("Hi from the server")
})

app.get("/sum", sumMiddleware, (req,res)=>{
    const val1 = parseInt(req.headers.val1)
    const val2 = parseInt(req.headers.val2)

    res.status(202).send("Sum is "+(val1+val2))
})

app.listen(port, ()=>console.log("Listening from the port: "+port))