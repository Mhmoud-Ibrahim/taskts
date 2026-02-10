import mongoose, { Document, Types } from 'mongoose';
export interface ITask extends Document {
    title: string;
    description: string;
    completed: boolean;
    user: Types.ObjectId;
}
export declare const Task: mongoose.Model<ITask, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, ITask, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITask & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<ITask, mongoose.Model<ITask, any, any, any, (mongoose.Document<unknown, any, ITask, any, mongoose.DefaultSchemaOptions> & ITask & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ITask, any, mongoose.DefaultSchemaOptions> & ITask & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}), any, ITask>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ITask, mongoose.Document<unknown, {}, ITask, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITask & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<Types.ObjectId, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITask & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    title?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITask & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    description?: mongoose.SchemaDefinitionProperty<string, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITask & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    completed?: mongoose.SchemaDefinitionProperty<boolean, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITask & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    user?: mongoose.SchemaDefinitionProperty<Types.ObjectId, ITask, mongoose.Document<unknown, {}, ITask, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITask & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, ITask>, ITask>;
//# sourceMappingURL=tasks.model.d.ts.map