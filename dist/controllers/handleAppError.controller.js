"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const handleAppError_middleware_1 = require("../middlewares/handleAppError.middleware");
const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new handleAppError_middleware_1.AppError(message, 400);
};
const handleDuplicateFieldsDB = (err) => {
    const message = "Email Already Exist . Please use another Email!";
    return new handleAppError_middleware_1.AppError(message, 400);
};
const handleValidationErrorDB = (err) => {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data. ${errors.join(". ")}`;
    return new handleAppError_middleware_1.AppError(message, 400);
};
const handleJsonWebTokenError = () => new handleAppError_middleware_1.AppError("Invalid Token, Please sign up", 401);
const handleTokenExpiredError = () => new handleAppError_middleware_1.AppError("Session expired, Please Login again", 401);
const sendDevError = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
    });
};
const sendProdError = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    else {
        console.error("Error, 🔥🔥🔥", err);
        res.status(500).json({
            status: "error",
            message: "Something went very wrong",
        });
    }
};
const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (process.env.NODE_ENV === "development") {
        sendDevError(err, res);
    }
    else if (process.env.NODE_ENV === "production") {
        let error = Object.assign({}, err);
        if (error.name === "CastError")
            error = handleCastErrorDB(error);
        if (error.code === 11000)
            error = handleDuplicateFieldsDB(error);
        if (error.name === "ValidationError")
            error = handleValidationErrorDB(error);
        if (error.name === "JsonWebTokenError")
            error = handleJsonWebTokenError();
        if (error.name === "TokenExpiredError")
            error = handleTokenExpiredError();
        sendProdError(error, res);
    }
};
exports.globalErrorHandler = globalErrorHandler;
//# sourceMappingURL=handleAppError.controller.js.map