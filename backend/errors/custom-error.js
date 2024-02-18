class CustomError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const customAPIError = (message,statusCode) => {
    const error = new CustomError(message,statusCode)
    return error
}

module.exports = {
    CustomError, customAPIError
}