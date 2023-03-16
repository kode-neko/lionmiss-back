import { Request, Response } from "express";
import { builderUserInfo } from "../../model/utils";
import { statusErrorCode } from "./utils";
import { isEmpty } from "lodash";

const userInfoModel = builderUserInfo();

function getUser(req: Request, res: Response): void {
  const { id } = req.body;
  userInfoModel
    .getUser(id)
    .then((cart) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err));
}

function getUserAll(req: Request, res: Response): void {
  userInfoModel
    .getUserAll()
    .then((list) => res.status(200).json(list))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function postUser(req: Request, res: Response): void {
  const { userInfo } = req.body;
  userInfoModel
    .postUser(userInfo)
    .then((newUserInfo) => res.status(201).json(newUserInfo))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function updateUser(req: Request, res: Response): void {
  const { userInfo } = req.body;
  userInfoModel
    .updateUser(userInfo)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function deleteUser(req: Request, res: Response): void {
  const { id } = req.body;
  userInfoModel
    .deleteUser(id)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

export { getUser, getUserAll, postUser, updateUser, deleteUser };
