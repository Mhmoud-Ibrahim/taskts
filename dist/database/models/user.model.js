import mongoose from "mongoose";
import { types } from "node:util";
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true,
});
export const User = mongoose.model('User', Schema);
//# sourceMappingURL=user.model.js.map