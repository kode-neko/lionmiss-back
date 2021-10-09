import { Request, Response } from "express";
import { builderUserInfo } from "../model/utils";
import { statusErrorCode } from "./utils";
import { isEmpty } from "lodash";

const userInfoModel = builderUserInfo();

function getUserInfo(req: Request, res: Response): void {
  const { id } = req.body;
  userInfoModel
    .getUserInfo(id)
    .then((cart) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err));
}

function getUserInfoAll(req: Request, res: Response): void {
  userInfoModel
    .getUserInfoAll()
    .then((list) => res.status(200).json(list))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function postUserInfo(req: Request, res: Response): void {
  const { userInfo } = req.body;
  userInfoModel
    .postUserInfo(userInfo)
    .then((newUserInfo) => res.status(201).json(newUserInfo))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function updateUserInfo(req: Request, res: Response): void {
  const { userInfo } = req.body;
  userInfoModel
    .updateUserInfo(userInfo)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function deleteUserInfo(req: Request, res: Response): void {
  const { id } = req.body;
  userInfoModel
    .deleteUserInfo(id)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

export { getUserInfo, getUserInfoAll, postUserInfo, updateUserInfo, deleteUserInfo };
