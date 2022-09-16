"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
/* eslint-disable require-jsdoc */
const AppError = class extends Error {
    constructor(message, statusCode) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.statusCode = statusCode;
        this.status = `${this.statusCode}`.startsWith("4") ? "Failed" : "Error";
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
};
exports.AppError = AppError;
//# sourceMappingURL=handleAppError.middleware.js.map