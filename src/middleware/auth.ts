
import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
interface JwtPayload {
    userId: string;
    email: string;
    name: string;
    iat: number;
    exp: number;  
}



export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string | undefined;

    // 1. محاولة جلب التوكن من الكوكيز
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    // 2. محاولة جلب التوكن من الـ Headers (للدعم في Postman)
    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    // إذا لم يوجد توكن في الحالتين
    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'غير مصرح لك، يرجى تسجيل الدخول أولاً'
      });
    }

    // 3. التحقق من صحة التوكن
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    // 4. وضع بيانات المستخدم في الطلب لاستخدامها في الدالة التالية (getMe)
    req.user = decoded; 

    next(); // الانتقال للدالة التالية (getMe)
  } catch (error) {
    return res.status(401).json({
      status: 'fail',
      message: 'توكن غير صالح أو منتهي الصلاحية'
    });
  }
};
