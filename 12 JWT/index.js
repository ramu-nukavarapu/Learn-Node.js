import express from 'express'
import jwt from "jsonwebtoken"

const app = express()
const port = 3000

// jwt tokens are json web tokens that are useful for encrypt the confidential information ( usually user credinatials ) with a secret key.
// It has two phases
    // encryption phase
    // decryption phase
// for the above phases, jwt provides methods to encrypt and decrypt information.
    // to encrypt data, -> jwt.sign(data, secret) 
    // to decrypt data, -> jwt.verify(token, secret, callback)

const SECRET = "S3CR3T"

function encryption(req, res, next){
    const value = req.headers.value
    const token = jwt.sign(value, SECRET)
    req.token = token
    next()
}

function decryption(req, res, next){
    const value = req.headers.tokenvalue
    jwt.verify(value, SECRET, (err, result)=>{
        req.decrypted = result
        next()
    }) 
}

app.get("/",(req,res)=>{
    res.send("Hi from the server")
})

app.get("/encrypt",encryption, (req,res)=>{
    res.send(req.token)
})

app.get("/decrypt", decryption, (req,res)=>{
    res.send(req.decrypted)
})

app.listen(port, ()=>console.log("Listening from the port: "+port))