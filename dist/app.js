"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_route_1 = __importDefault(require("./routes/image.route"));
const handleAppError_middleware_1 = require("./middlewares/handleAppError.middleware");
const handleAppError_controller_1 = require("./controllers/handleAppError.controller");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Body parser
app.use(express_1.default.json({ limit: "10kb" }));
// API Routes
app.use("/api/v1/filteredimage", image_route_1.default);
app.get("/api/v1", (_req, res) => res.status(200).json({
    message: "success",
    data: "Welcome to  UDACITY IMAGE FILTER server",
}));
app.get("/", (_req, res) => res.status(200).json({
    message: "success",
    data: "Welcome to UDACITY IMAGE FILTER server",
}));
// Invalid Routes / not found route error handler
app.all("*", (req, res, next) => next(new handleAppError_middleware_1.AppError(`Cannot find ${req.originalUrl} on this server`, 400)));
// Global error handling middleware
app.use(handleAppError_controller_1.globalErrorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map