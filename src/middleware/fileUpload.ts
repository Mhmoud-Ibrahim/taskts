// import multer from 'multer'
// import { AppError } from '../utils/appError.js'
// import { v4 as uuidv4 } from 'uuid'
// import type { Request } from 'express';
// import fs from 'fs';
// export const fileUpload = (folderName: string) => {

   
    
//     // إنشاء المجلد إذا لم يكن موجوداً لمنع خطأ 500
//     // if (!fs.existsSync(path)) {
//     //     fs.mkdirSync(path, { recursive: true });
//     // }
//     const storage = multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, `uploads/${folderName}`)
//         },
//         filename: (req, file, cb) => {
//             cb(null, uuidv4() + "-" + file.originalname)
//         }
//     })

//     function fileFilter(req: Request, file: Express.Multer.File, cb: any) {
//         if (file.mimetype.startsWith('image')) {
//             cb(null, true)
//         } else {
//             cb(new AppError('images only', 401), false)
//         }
//     }

//     const upload = multer({ storage, fileFilter })
//     return upload
// }

// export const uploadSingleFile = (fieldName: string, folderName: string) =>
//     fileUpload(folderName).single(fieldName)

// export const uploadMixOfFiles = (arrayOfFields: multer.Field[], folderName: string) =>
//     fileUpload(folderName).fields(arrayOfFields)
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { AppError } from '../utils/appError.js';

// إعداد Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
    api_key: process.env.CLOUDINARY_API_KEY as string,
    api_secret: process.env.CLOUDINARY_API_SECRET   as string,
});

export const fileUpload = (folderName: string) => {
    // إعداد التخزين السحابي بدلاً من القرص الصلب
    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: async (req, file) => {
            return {
                folder: `nooreen/${folderName}`, // اسم المجلد في Cloudinary
                format: 'jpg', // تحويل كل الصور لـ jpg لتقليل الحجم
                public_id: Date.now() + "-" + file.originalname.split('.')[0],
            };
        },
    });

    function fileFilter(req: any, file: Express.Multer.File, cb: any) {
        if (file.mimetype.startsWith('image')) {
            cb(null, true);
        } else {
            cb(new AppError('Images only allowed', 400), false);
        }
    }

    const upload = multer({ 
        storage, 
        fileFilter,
        limits: { fileSize: 2 * 1024 * 1024 } // حد أقصى 4.5MB لكل صورة لتناسب Vercel
    });
    
    return upload;
}

export const uploadSingleFile = (fieldName: string, folderName: string) =>
    fileUpload(folderName).single(fieldName);

export const uploadMixOfFiles = (arrayOfFields: multer.Field[], folderName: string) =>
    fileUpload(folderName).fields(arrayOfFields);
