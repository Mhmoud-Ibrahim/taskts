import mongoSession  from 'connect-mongodb-session';
import express, { type NextFunction, type Request, type Response } from 'express'
import { dbConnections } from './database/dbConnections.js'
import taskRouter from './src/modules/tasks/tasks.routes.js'
import userRouter from './src/modules/user/user.routes.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port =process.env.PORT ||3000
app.use(express.json())
import cors from 'cors'
import session from 'express-session'
import 'express-session';
import { AppError } from './src/utils/appError.js';
import globalErrorHandler from './src/middleware/globalError.js';

app.use(cors({
  origin: 'http://localhost:5173', // رابط الفروينت اند الخاص بك
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true // ضروري للسماح بالكوكيز
}));

const MongoDBStore = mongoSession(session)
let store = new MongoDBStore({
    uri:process.env.MONGO_URL as string,
    collection:'sessions'
})
store.on('error', (error: any) => {
  console.error('Session Store Error:', error);
});
app.use(session({
    secret:'mahmooud',
    saveUninitialized:true,
    resave:false,
    store ,
      cookie: {
    secure: true, // اجعله false طالما لا تستخدم https
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: 'lax' // مهم جداً للمتصفحات الحديثة في البيئة المحلية
  } 
}))





app.use(taskRouter)
app.use(userRouter)

dbConnections()
app.get('/', (req, res) =>
  
     res.json({message:"hello Tasks from mahmoud"})
)


app.all(/(.*)/,(req:Request,res:Response,next:NextFunction)=>{
  next(new AppError(`Route ${req.originalUrl} Not Found`,404))
})
app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
  res.status(err.statusCode).json({error: "error", message:err.message,code:err.statusCode})
})


app.use(globalErrorHandler)

app.listen( process.env.PORT|| port, () => console.log(`Example app listening on port ${port}!`))