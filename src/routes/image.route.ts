import { Router } from "express";

const imageRouter = Router();

imageRouter.route("/").get("");

export default imageRouter;
