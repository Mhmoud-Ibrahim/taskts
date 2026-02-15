import mongoose, { Schema, model, Document, Types } from 'mongoose';
const TAskSchema = new mongoose.Schema({
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
        default: false
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true,
});
export const Tasks = mongoose.model('Tasks', TAskSchema);
//# sourceMappingURL=tasks.model.js.map