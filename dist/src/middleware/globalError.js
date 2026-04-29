// import type { NextFunction, Request, Response } from "express";
const globalErrorHandler = (err, req, res, next) => {
    // التأكد أن الـ statusCode رقم صحيح وليس undefined أو NaN
    let statusCode = err.statusCode;
    if (!statusCode || isNaN(Number(statusCode))) {
        statusCode = 500;
    }
    else {
        statusCode = Number(statusCode);
    }
    const status = err.status || 'error';
    const message = err.message || 'Internal Server Error';
    // ملاحظة: Vercel غالبًا ما تعمل بوضع production إلا لو حددت غير ذلك
    if (process.env.MODE === 'development') {
        return res.status(statusCode).json({
            status: status,
            error: message,
            stack: err.stack,
            code: statusCode
        });
    }
    else {
        return res.status(statusCode).json({
            status: status,
            error: message,
            code: statusCode
        });
    }
};
export default globalErrorHandler;
//# sourceMappingURL=globalError.js.map