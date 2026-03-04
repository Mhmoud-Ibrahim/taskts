import mongoose from "mongoose";
import 'dotenv/config'; // تأكد من استيرادها هنا
const MONGODB_URI = process.env.URI;
export const dbConnections = async () => {
    if (!MONGODB_URI) {
        throw new Error("Please define the URI environment variable inside .env");
    }
    if (mongoose.connection.readyState >= 1) {
        return mongoose.connection;
    }
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log("Connected successfully to MongoDB");
        return conn;
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
//# sourceMappingURL=dbConnections.js.map