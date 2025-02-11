// default export is a way to export functions with the name, while importing the name may or may not be same as exported name

const userHandler = async(req,res) => {
    res.send("Hello User!!!")
}

// syntax for default export
export default userHandler;