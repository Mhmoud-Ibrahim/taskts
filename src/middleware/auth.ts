

import type { NextFunction, Request, Response } from 'express';
import jwt, { type JwtPayload } from 'jsonwebtoken';

interface MyTokenPayload extends JwtPayload {
  userId: string;
}
export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        let {token} = req.headers as any;
        if (!token) return res.status(401).json({ message: 'no token provided.' });
        const decoded = jwt.verify(token,process.env.JWT_KEY as string)as MyTokenPayload; ;
        (req as any).user = decoded.userId;
        return next();
    
    } catch (error) {
    res.status(401).send({ error: 'Invalid Token' });
    }

};
