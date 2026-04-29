import type { NextFunction, Request, Response } from "express";
declare const globalErrorHandler: (err: any, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export default globalErrorHandler;
//# sourceMappingURL=globalError.d.ts.map