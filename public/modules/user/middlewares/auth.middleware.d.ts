import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "../../../types/types.js";
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => void;
export declare const authorizeRole: (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map