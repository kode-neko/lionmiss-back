import { NextFunction, Request, Response } from "express";

function midProtocol(req: Request, res: Response, next: NextFunction) {
  if (req.protocol === 'https') {
    return res.redirect(301, `http://${req.headers.host}${req.url}`);
  } 
  next();
}

export default midProtocol;