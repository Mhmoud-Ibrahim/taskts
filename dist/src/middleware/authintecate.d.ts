import type { NextFunction, Request, Response } from "express";
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => void;
export declare const allowedTo: (...roles: string[]) => (req: any, res: Response, next: NextFunction) => void;
//# sourceMappingURL=authintecate.d.ts.map