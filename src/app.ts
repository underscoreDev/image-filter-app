import imageRouter from "./routes/image.route";
import { AppError } from "./middlewares/handleAppError.middleware";
import { globalErrorHandler } from "./controllers/handleAppError.controller";
import express, { Request, Response, Application, NextFunction } from "express";

const app: Application = express();

// Body parser
app.use(express.json({ limit: "10kb" }));

// API Routes
app.use("/api/v1/filteredimage", imageRouter);
app.get("/api/v1", (_req: Request, res: Response) =>
  res.status(200).json({
    message: "success",
    data: "Welcome to  UDACITY IMAGE FILTER server",
  })
);
app.get("/", (_req: Request, res: Response) =>
  res.status(200).json({
    message: "success",
    data: "Welcome to UDACITY IMAGE FILTER server",
  })
);

// Invalid Routes / not found route error handler
app.all("*", (req: Request, res: Response, next: NextFunction) =>
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 400))
);

// Global error handling middleware
app.use(globalErrorHandler);

export default app;
