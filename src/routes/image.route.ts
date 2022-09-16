import { Router } from "express";
import { filterImage } from "./../controllers/imageFilter.controller";
import { catchAsync } from "./../middlewares/catchAsyncError.middleware";

const imageRouter = Router();

imageRouter.route("/").get(catchAsync(filterImage));

export default imageRouter;
