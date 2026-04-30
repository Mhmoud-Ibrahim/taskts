import { type NextFunction, type Request, type RequestHandler, type Response } from 'express';
type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const catchError: (fn: AsyncFunction) => RequestHandler;
export {};
//# sourceMappingURL=catchError.d.ts.map