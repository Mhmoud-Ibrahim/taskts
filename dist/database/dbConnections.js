import mongoose, { connect } from "mongoose";
export const dbConnections = () => {
    if (mongoose.connection.readyState >= 1)
        return;
    console.log("connected successfully");
    return mongoose.connect(process.env.MONGO_URL);
};
//# sourceMappingURL=dbConnections.js.map