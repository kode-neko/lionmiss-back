import { Request, Response, NextFunction } from "express";

function logHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(500).json({ msg: err.message })
  next(err);
}

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  res.status(500);
}

export {
  logHandler,
  errorHandler
}