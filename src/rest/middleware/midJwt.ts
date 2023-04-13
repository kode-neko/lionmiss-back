import { NextFunction, Request, Response } from "express";
import { builderUser } from "../../model/utils/builderUser.js";
import { IUser } from "../../model/IUser.js";
import { LMUser } from "lionmiss-core";
import jwt, { JwtPayload } from 'jsonwebtoken';

const userModel: IUser = builderUser()

async function midJwt(req: Request, res: Response, next: NextFunction) {
  const authHeader: string = req.headers['authorization'];
  const token: string = authHeader && authHeader.split(' ')[1];

  if(token === null)
    res.status(403).json({msj: 'error.auth'});

  try {
    const {payload}: JwtPayload = jwt.verify(token, process.env.KEY_TOKEN) as JwtPayload;
    const user: LMUser = await userModel.getUserByName(payload.username);
    if(!user)
      res.status(401).json({msj: 'error.user'});
  } catch(err) {
    res.status(401).json({msj: 'error.authorization'});
  }
  
  next();
}

export default midJwt;