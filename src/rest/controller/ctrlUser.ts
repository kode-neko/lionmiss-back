import { Request, Response } from "express";
import { builderUser } from "../../model/utils/index.js";
import isEmpty from "is-obj-empty";
import { LMUser } from "lionmiss-core";
import { LMBError, LMBSearchParams } from "../../model/LMB/index.js";
import { IUser } from "../../model/IUser.js";

const userModel: IUser = builderUser();

function getUser(req: Request, res: Response): void {
  const { id } = req.params;
  userModel
    .getUser(id)
    .then((cart: LMUser) => res.status(isEmpty(cart) ? 404 : 200).json(cart));
}

function getUserAll(req: Request, res: Response): void {
  const { limit, offset, search }: LMBSearchParams = req.body;
  userModel
    .getUserAll({ limit, offset, search })
    .then((list: LMUser[]) => res.status(200).json(list));
}

function postUser(req: Request, res: Response): void {
  const user: Omit<LMUser, '_id'> = req.body;
  userModel
    .postUser(user)
    .then((newUserInfo: LMUser | LMBError) => res.status(201).json(newUserInfo));
}

function updateUser(req: Request, res: Response): void {
  const user: LMUser = req.body;
  userModel
    .updateUser(user)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404));
}

function deleteUser(req: Request, res: Response): void {
  const { id } = req.params;
  userModel
    .deleteUser(id)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404));
}

export { getUser, getUserAll, postUser, updateUser, deleteUser };
