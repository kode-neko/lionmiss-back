import basicAuth, {BasicAuthResult} from "basic-auth";
import {Request, Response} from "express";
import {builderUser} from "../../model/utils/index";
import isEmpty from "is-obj-empty";
import {LMUser} from "lionmiss-core";
import {LMBSearchParams, LMBUser} from "../../model/LMB/index";
import {IUser} from "../../model/IUser";
import {hashSync} from "bcrypt";
import jwt from "jsonwebtoken";

const userModel: IUser = builderUser();

function getUser(req: Request, res: Response): void {
  const {id} = req.params;
  userModel
    .getUser(id)
    .then((user: LMBUser) =>
      res.status(isEmpty(user) ? 404 : 200).json({...user, pass: null})
    );
}

function getUserAll(req: Request, res: Response): void {
  const {limit, offset, search}: LMBSearchParams = req.body;
  userModel
    .getUserAll({limit, offset, search})
    .then((list: LMBUser[]) =>
      res.status(200).json(list.map((user: LMBUser) => ({...user, pass: null})))
    );
}

function updateUser(req: Request, res: Response): void {
  const user: LMBUser = req.body;
  userModel.updateUser(user).then((ok: boolean) => res.status(ok ? 200 : 404));
}

function deleteUser(req: Request, res: Response): void {
  const {id} = req.params;
  userModel.deleteUser(id).then((ok: boolean) => res.status(ok ? 200 : 404));
}

// Authentication methods
function signUp(req: Request, res: Response): void {
  const user: LMBUser = req.body;
  userModel
    .postUser(user)
    .then((newUser: LMBUser) => res.status(201).json({...newUser, pass: null}));
}

async function login(req: Request, res: Response) {
  const credentials: BasicAuthResult = basicAuth(req);

  // Check auth header
  if (!credentials) return res.status(400).json({msj: "error.request"});

  // Check user exists
  const {name, pass} = credentials;
  const user: LMUser = await userModel.getUserByName(name);
  if (!user) return res.status(404).json({msj: "error.user"});

  // Check pass
  if (hashSync(pass) !== user.pass)
    return res.status(404).json({msj: "error.pass"});

  //Return token
  const token: string = jwt.sign({username: name}, process.env.KEY_TOKEN, {
    algorithm: "RS256",
  });
  res.status(200).json(token);
}

export {getUser, getUserAll, updateUser, deleteUser, signUp, login};
