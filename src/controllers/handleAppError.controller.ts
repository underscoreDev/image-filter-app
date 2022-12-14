import { ErrorRequestHandler, Response, Request, NextFunction } from "express";

export const globalErrorHandler: ErrorRequestHandler = (
  err: { statusCode: any; status: any; message: any },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
