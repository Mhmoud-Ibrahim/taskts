import dotenv from 'dotenv'
dotenv.config()
import express, { type NextFunction, type Request, type Response } from 'express'
import { dbConnections } from './database/dbConnections.js'
import taskRouter from './src/modules/tasks/tasks.routes.js'
import userRouter from './src/modules/user/user.routes.js'
import globalErrorHandler from './src/middleware/globalError.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { AppError } from './src/utils/appError.js'
const app = express()
const port =process.env.PORT ||3000


app.use(cors({
  origin: [
    'https://tasksnextjs.vercel.app',
    'https://tasks-frontend-roan.vercel.app',
    'http://localhost:3000'
  ], // رابط الفروينت اند الخاص بك
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true, // ضروري للسماح بالكوكيز
   allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use(cookieParser())
app.use(express.json())

app.use(taskRouter)
app.use('/auth', userRouter)
app.get('/',(req:Request,res:Response)=>{
  res.json({message:"hello in My tasks"})
})

dbConnections()


app.all(/(.*)/,(req:Request,res:Response,next:NextFunction)=>{
  next(new AppError(`Route ${req.originalUrl} Not Found`,404))
})


app.use(globalErrorHandler)

app.listen( process.env.PORT|| port, () => console.log(`Example app listening on port ${port}!`))