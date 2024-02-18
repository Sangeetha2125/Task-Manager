const {CustomError} = require("./custom-error")

const CustomErrorHandler = (err,req,res,next) => {
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({message:err.message})
    }
    res.status(500).json({message: err.errors["name"].message||"Something went wrong!, Try again later!"})
}

module.exports = CustomErrorHandler