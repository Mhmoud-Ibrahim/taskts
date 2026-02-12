import mongoSession  from 'connect-mongodb-session';
import express from 'express'
import { dbConnections } from './database/dbConnections.js'
import taskRouter from './src/modules/tasks/tasks.routes.js'
import userRouter from './src/modules/user/user.routes.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = 3000
app.use(express.json())
import cors from 'cors'
import session from 'express-session'

app.use(cors({
  origin: 'http://localhost:5173', // رابط الفروينت اند الخاص بك
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true // ضروري للسماح بالكوكيز
}));

const MongoDBStore = mongoSession(session)

let store = new MongoDBStore({
    uri:process.env.MONGO_URL as string,
    collection:'tasksSessions'
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
    secure: false, // اجعله false طالما لا تستخدم https
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
app.listen( process.env.PORT|| port, () => console.log(`Example app listening on port ${port}!`))