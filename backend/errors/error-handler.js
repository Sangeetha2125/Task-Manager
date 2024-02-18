const {CustomError} = require("./custom-error")

const CustomErrorHandler = (err,req,res,next) => {
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({message:err.message})
    }
    if(err.name=="ValidationError"){
        return res.status(500).json({message: err.errors["name"].message})
    }
    else if(err.name=="CastError"){
        return res.status(404).json({message: "Page not found"})
    }
    else if(err.message){
        return res.status(500).json({message: err.message})
    }
    res.status(500).json({message: "Something went wrong!, Try again later!"})
}

module.exports = CustomErrorHandler