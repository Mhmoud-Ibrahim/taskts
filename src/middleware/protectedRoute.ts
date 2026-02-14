import jwt from 'jsonwebtoken';
import { catchError } from "./catchError.js"
import { AppError } from '../utils/appError.js';
import { User } from '../../database/models/user.model.js';
import type { NextFunction, Request, Response } from 'express';

interface MyToken {
    userId: string;
    iat?: number;
    exp?: number;
}
export const protectedRoute = catchError(async( req: Request, res: Response, next: NextFunction)=>{
    let {token} = req.headers
    if(!token) return next(new AppError('token not provided',401))

    next()
    })