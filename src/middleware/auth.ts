import type { NextFunction, Request, Response } from "express";


 const auth = (req: Request, res: Response, next: NextFunction) => {
  // express-session تبحث تلقائياً في MongoDB عن السيشن المطابقة للكوكي المرسلة
  if (req.session && req.session) {
    // إذا وجد المستخدم، نمرر الطلب للـ Route التالي
    return next();
  } 
  
};

export default auth