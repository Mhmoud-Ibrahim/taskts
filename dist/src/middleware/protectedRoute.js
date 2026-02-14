import jwt from 'jsonwebtoken';
import { catchError } from "./catchError.js";
import { AppError } from '../utils/appError.js';
import { User } from '../../database/models/user.model.js';
export const protectedRoute = catchError(async (req, res, next) => {
    let { token } = req.headers;
    if (!token)
        return next(new AppError('token not provided', 401));
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    let user = await User.findById(decoded.userId);
    if (user)
        req.user = user;
    if (!user)
        next(new AppError('user not found', 401));
    next();
});
//# sourceMappingURL=protectedRoute.js.map