import { Request, NextFunction, Response } from "express";
import { filterImageFromUrl, deleteLocalFiles } from "../util/util";
import { AppError } from "./../middlewares/handleAppError.middleware";

const isImage = (url: any): boolean =>
  /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);

export const filterImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { image_url } = req.query;

  if (!image_url) {
    return next(new AppError("Please enter an image url", 400));
  }

  if (!isImage(image_url)) {
    return next(
      new AppError("Invalid Image Url. Please enter a valid image url", 400)
    );
  }

  const filteredImage = await filterImageFromUrl(`${image_url}`);

  res.status(200).sendFile(filteredImage, (err: any) => {
    if (err) {
      new AppError("An Error Occoured", 400);
    } else {
      deleteLocalFiles([filteredImage]);
    }
  });
};
