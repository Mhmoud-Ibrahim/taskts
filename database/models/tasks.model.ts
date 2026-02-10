import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    completed: boolean;
    user: Types.ObjectId; 
}
const TAskSchema = new mongoose.Schema<ITask>({
    title: {
        type: String,
        required: true  
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false},
        user:
           { type:Schema.Types.ObjectId, ref: 'User', required: true },
          
},{timestamps:true,
    
})


export const Task = mongoose.model('Task',TAskSchema)       


