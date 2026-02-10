import { connect } from "mongoose"


export const  dbConnections = ()=>{
    connect(process.env.MONGO_URL as string)
    .then(()=>{
        console.log("Database connected successfully")
    })
    .catch((error)=>{
        console.log("Database connection failed",error)
    })
}

