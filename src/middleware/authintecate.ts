import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError.js";
interface JwtPayload {
    userId: string;
    email: string;
    name: string;
    iat: number;
    exp: number;  
}
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    // قراءة التوكن من الكوكيز
    const token = req.cookies.task_token|| req.cookies
    if (!token) return next(new AppError(" token not found unauthorized", 401));
        try {
        const decoded: any = jwt.verify(token, process.env.JWT_KEY as string)as JwtPayload;
        req.user = decoded; 
       return next();
    } catch (error) {
        return next(new AppError("Invalid or expired token", 401));
    }
   
};
