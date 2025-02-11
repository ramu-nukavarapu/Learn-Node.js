import express from 'express'
import user from './userHandler.js'
import { adminHandler } from './adminHandler.js'

const app = express()
const port = 3000


// Exports are used to export the functions from source file, so that we can use whereever we want by importing it.
// Two ways to export based on the using syntax
    // commonJS Syntax
    // ES6 Syntax

// For, CommonJS we can export by using `module.export = exportFunction`
// For, ES6 we can export by using `export default exportFunction` -> Default export syntax or `export {exportFunction}` -> Named export syntax


// default export
app.get("/user", user)

// named export
app.get("/admin", adminHandler)

app.listen(port, ()=>console.log("Listening from the port: "+port))