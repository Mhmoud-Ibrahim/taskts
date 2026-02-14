const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (process.env.MODE == 'development') {
        res.status(err.statusCode).json({ error: err.message, stack: err.stack });
    }
    else {
        res.status(err.statusCode).json({ error: err.message });
    }
};
export default globalErrorHandler;
//# sourceMappingURL=globalError.js.map