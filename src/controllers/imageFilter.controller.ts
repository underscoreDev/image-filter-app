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
  if (!isImage(image_url)) {
    return next(new AppError("Please enter a valid image url", 400));
  }
  const filteredImage = await filterImageFromUrl(`${image_url}`);
  console.log(filteredImage);
  res.status(200).json({ status: "success", data: filteredImage });
  //   return res.status(200).sendFile(filteredImage);
  await deleteLocalFiles([filteredImage]);
};
