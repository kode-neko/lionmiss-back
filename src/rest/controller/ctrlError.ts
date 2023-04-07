/* eslint-disable @typescript-eslint/typedef */
import { Request, Response, NextFunction } from "express";

const logHandler = (err: Error, _req: Request, _res: Response, next: NextFunction) => {
  console.error(err.stack)
  next(err)
};

const errorHandler = (err: Error, _req: Request, res: Response) => {
  res.status(500).json(err.message);
};

export {
  logHandler,
  errorHandler
}