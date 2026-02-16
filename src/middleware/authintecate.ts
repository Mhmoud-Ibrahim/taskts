import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError.js";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    // قراءة التوكن من الكوكيز
    const token = req.cookies.access_token;
    if (!token) return next(new AppError(" token not found", 401));
        try {
        const decoded: any = jwt.verify(token, process.env.JWT_KEY as string);
        (req as any).user = decoded; 
        next();
    } catch (error) {
        return next(new AppError("Invalid or expired token", 401));
    }
   
};
