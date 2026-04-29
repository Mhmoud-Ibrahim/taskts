// import type { NextFunction, Request, Response } from "express";

// const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

//     const statusCode = Number(err.statusCode) || 500;

//     const status = err.status || 'error';
//     const message = err.message || 'Internal Server Error';
//     if (process.env.MODE === 'development') {
//         res.status(statusCode).json({
//             status: status,
//             error: message,
//             stack: err.stack
//         });
//     } else {
//         res.status(statusCode).json({
//             status: status,
//             error: message
//         });
//     }
// };

// export default globalErrorHandler;
import type { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    // التأكد أن الـ statusCode رقم صحيح وليس undefined أو NaN
    let statusCode = err.statusCode;
    
    if (!statusCode || isNaN(Number(statusCode))) {
        statusCode = 500;
    } else {
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
    } else {
        return res.status(statusCode).json({
            status: status,
            error: message,
            code: statusCode
        });
    }
};

export default globalErrorHandler;
