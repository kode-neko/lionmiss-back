import { Request, Response, NextFunction } from "express";

function logHandler(req: Request, res: Response, next: NextFunction) {
  console.log(`Received a ${req.method} request for ${req.url}`);
  next();
}

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(500);
}

export {
  logHandler,
  errorHandler
}