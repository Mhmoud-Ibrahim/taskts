import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.js";
export const authenticate = (req, res, next) => {
    // قراءة التوكن من الكوكيز
    const token = req.cookies.task_token || req.cookies;
    if (!token)
        return next(new AppError(" token not found unauthorized", 401));
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        return next();
    }
    catch (error) {
        return next(new AppError("Invalid or expired token", 401));
    }
};
//# sourceMappingURL=authintecate.js.map