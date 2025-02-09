import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

// CORS refers cross origin response
// CORS error usually occur when frontend requests for data to the backend from different origin (address)
// To avoid cors error, we use cors middleware which is a way to get requests from the cross-origin ( usually front-end )

app.use(cors())

// To visualize the CORS error, comment the cors middleware registration, start the server and run index.html file, which is in the same folder


// Temp data to display
const data = [
    {id : 1, name : "ramu"},
    {id : 2, name : "sai"},
    {id : 3, name : "teja"},
    {id : 4,name : "vijay"}
]

// By the get route, the front end will get the user object by the index of array
app.get("/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    res.send(data[id])
})

app.listen(port, ()=>console.log("Listening from the port: "+port))