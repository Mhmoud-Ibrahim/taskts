import express, { type NextFunction, type Request, type Response } from 'express'
import { dbConnections } from './database/dbConnections.js'
import taskRouter from './src/modules/tasks/tasks.routes.js'
import userRouter from './src/modules/user/user.routes.js'
import { AppError } from './src/utils/appError.js';
import globalErrorHandler from './src/middleware/globalError.js';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const app = express()
const port =process.env.PORT ||3000
app.use(express.json())

app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:5173', // رابط الفروينت اند الخاص بك
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true // ضروري للسماح بالكوكيز
}));


app.use(taskRouter)
app.use(userRouter)
app.get('/',(req:Request,res:Response)=>{
  res.json({message:"hello in My tasks"})
})

dbConnections()


app.all(/(.*)/,(req:Request,res:Response,next:NextFunction)=>{
  next(new AppError(`Route ${req.originalUrl} Not Found`,404))
})
app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
  res.status(err.statusCode).json({error: "error", message:err.message,code:err.statusCode})
})

app.use(globalErrorHandler)

app.listen( process.env.PORT|| port, () => console.log(`Example app listening on port ${port}!`))