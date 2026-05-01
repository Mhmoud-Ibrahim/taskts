import dotenv from 'dotenv'
dotenv.config()
import express, { type Application, type NextFunction, type Request, type Response } from 'express'
import { dbConnections } from '../database/dbConnections.js'
import taskRouter from './modules/tasks/tasks.routes.js'
import globalErrorHandler from './middleware/globalError.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { AppError } from './utils/appError.js'
import authRouter from './modules/auth/auth.routes.js'
import passport from 'passport'


import './modules/auth/auth.controller.js'; 
const app: Application = express();
app.use(cors({
  origin: [
    'https://tasksnextjs.vercel.app',
    'https://tasks-frontend-roan.vercel.app',
    'http://localhost:3000'
  ], // رابط الفروينت اند الخاص بك
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  credentials: true, 
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'] 
}));



dbConnections()

app.use(cookieParser());
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ limit: '15mb', extended: true }));

// 3. تفعيل الباسبورت (يجب أن يتم قبل تعريف الـ Routes)
app.use(passport.initialize());


app.use(taskRouter)
app.use('/auth', authRouter);


app.get('/', (req: Request, res: Response) => res.send('OK - API is running'));

// معالجة المسارات غير الموجودة
app.all(/(.*)/, (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Route ${req.originalUrl} Not Found`, 404));
});

// ميدل وير معالجة الأخطاء العالمي
app.use(globalErrorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});