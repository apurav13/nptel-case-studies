import express, { Request, Response, NextFunction } from "express";
import loyaltyRoutes from "./routes/loyalty";
import { ApiError } from "./errors/ApiError";
const app = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "success",
    message: "FreshMart Loyalty API Running"
  });
});
app.use("/loyalty", loyaltyRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: "error",
      error: err.message
    });
  }
  console.error(err);
  res.status(500).json({
    status: "error",
    error: "Internal server error"
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});