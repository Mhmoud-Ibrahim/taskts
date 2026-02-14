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
    const decoded = jwt.verify(token as string,process.env.JWT_KEY as string )as MyToken
    let user =await  User.findById(decoded.userId)
   if(user) (req as any).user  = user
  if(!user) next(new AppError('user not found',401))
    next()
    })