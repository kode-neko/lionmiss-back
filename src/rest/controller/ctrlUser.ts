import { Request, Response } from "express";
import { builderUser } from "../../model/utils/index.js";
import { statusErrorCode } from "./utils/index.js";
import { isEmpty } from "lodash";
import { LMUser } from "lionmiss-core";
import { LMBError } from "../../model/LMB/index.js";
import { IUser } from "../../model/IUser.js";

const userModel: IUser = builderUser();

function getUser(req: Request, res: Response): void {
  const { id } = req.body;
  userModel
    .getUser(id)
    .then((cart: LMUser) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function getUserAll(req: Request, res: Response): void {
  const { limit, offset, search } = req.body;
  userModel
    .getUserAll({ limit, offset, search })
    .then((list: LMUser[]) => res.status(200).json(list))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function postUser(req: Request, res: Response): void {
  const { userInfo } = req.body;
  userModel
    .postUser(userInfo)
    .then((newUserInfo: LMUser | LMBError) => res.status(201).json(newUserInfo))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function updateUser(req: Request, res: Response): void {
  const { userInfo } = req.body;
  userModel
    .updateUser(userInfo)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function deleteUser(req: Request, res: Response): void {
  const { id } = req.body;
  userModel
    .deleteUser(id)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

export { getUser, getUserAll, postUser, updateUser, deleteUser };
