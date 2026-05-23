import type { Request } from 'express';
import type { User, UserRole, UserStatus } from './types.ts';

export declare global {
    namespace Express {
        interface Request {
            user?: User
        }
    }
}

