"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageFilter_controller_1 = require("./../controllers/imageFilter.controller");
const catchAsyncError_middleware_1 = require("./../middlewares/catchAsyncError.middleware");
const imageRouter = (0, express_1.Router)();
imageRouter.route("/").get((0, catchAsyncError_middleware_1.catchAsync)(imageFilter_controller_1.filterImage));
exports.default = imageRouter;
//# sourceMappingURL=image.route.js.map