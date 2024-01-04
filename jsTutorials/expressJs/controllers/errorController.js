module.exports = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'errorr'
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
}