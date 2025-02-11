// Named export is a way to export functions with the name, while importing the name must be same as exported name

const adminHandler = async(req,res) => {
    res.send("Hello Admin!!!")
}

// syntax for named export
export {adminHandler};