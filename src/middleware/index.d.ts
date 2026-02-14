import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any; // أو ضع نوع الـ User الخاص بك هنا بدلاً من any
  }
}
