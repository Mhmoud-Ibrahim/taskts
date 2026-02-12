import 'express-session';
declare module 'express-session' {
    interface SessionData {
        user: {
            userId: string;
            name: string;
            email: string;
            password: string;
        };
    }
}
//# sourceMappingURL=index.d.ts.map