import mongoose, { Document, Types } from 'mongoose';
export interface ITask extends Document {
    title: string;
    description: string;
    completed: boolean;
    user: Types.ObjectId;
}
export declare const Tasks: mongoose.Model<ITask, {}, {}, {}, mongoose.Document<unknown, {}, ITask, {}, mongoose.DefaultSchemaOptions> & ITask & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, mongoose.Schema<ITask, mongoose.Model<ITask, any, any, any, mongoose.Document<unknown, any, ITask, any, {}> & ITask & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ITask, mongoose.Document<unknown, {}, mongoose.FlatRecord<ITask>, {}, mongoose.DefaultSchemaOptions> & mongoose.FlatRecord<ITask> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>>;
//# sourceMappingURL=tasks.model.d.ts.map