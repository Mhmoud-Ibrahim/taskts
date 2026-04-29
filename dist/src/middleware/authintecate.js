import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
export const authenticate = (req, res, next) => {
    const token = req.cookies?.TaskToken;
    if (!token) {
        return next(new AppError("Login first to access this route", 401));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    }
    catch (error) {
        return next(new AppError("Invalid or expired token, please login again", 401));
    }
};
export const allowedTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new AppError("غير مسموح لك بالقيام بهذا الإجراء، للآدمن فقط", 403));
        }
        next();
    };
};
//# sourceMappingURL=authintecate.js.map