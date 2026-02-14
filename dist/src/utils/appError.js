export class AppError extends Error {
    statusCode;
    status; // نص مثل 'fail' أو 'error'
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
//# sourceMappingURL=appError.js.map