import {NextFunction, Request, Response} from "express";
import {builderUser} from "../../model/utils/builderUser";
import {IUser} from "../../model/IUser";
import {LMUser} from "lionmiss-core";
import jwt, {JwtPayload} from "jsonwebtoken";
import isEmpty from "empty-lite";

const userModel: IUser = builderUser();

async function midJwt(req: Request, res: Response, next: NextFunction) {
  const authHeader: string = req.headers["authorization"];

  if (isEmpty(authHeader)) {
    res.status(400).json({msj: "error.generic"});
    return;
  }

  const token: string = authHeader.split(" ")[1];
  if (isEmpty(token)) {
    res.status(400).json({msj: "error.authorization"});
    return;
  }

  try {
    const payload: JwtPayload = jwt.verify(
      token,
      process.env.KEY_TOKEN
    ) as JwtPayload;
    const user: LMUser = await userModel.getUserByName(payload.username);
    if (!user) {
      res.status(401).json({msj: "error.user"});
      return;
    }
  } catch (err) {
    res.status(400).json({msj: "error.authorization"});
    return;
  }

  next();
}

export default midJwt;
