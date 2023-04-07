import { Request, Response } from "express";
import { ICart } from "../../model/index.js";
import { statusErrorCode } from "./utils/index.js";
import { isEmpty } from "lodash";
import { LMBError } from "../../model/LMB/index.js";
import { LMCart } from "lionmiss-core";
import { builderCart } from "../../model/utils/builderCart.js";

const userInfo: ICart = builderCart();

function getCart(req: Request, res: Response): void {
  const { idUser } = req.params;
  userInfo
    .getCart(idUser)
    .then((cart: LMCart | LMBError) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function createCart(req: Request, res: Response): void {
  const { idUser, cart } = req.body;
  userInfo
    .postCart(idUser, cart)
    .then((ok: boolean | LMBError) => res.status(ok ? 201 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function updateCart(req: Request, res: Response): void {
  const { idUser, cart } = req.body;
  userInfo
    .updateCart(idUser, cart)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function deleteCart(req: Request, res: Response): void {
  const { idUser } = req.params;
  userInfo
    .deleteCart(idUser)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function postCartProduct(req: Request, res: Response): void {
  const { idUser, cartProduct } = req.body;
  userInfo
    .postProductCart(idUser, cartProduct)
    .then((ok: boolean | LMBError) => res.status(ok ? 201 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function putCartProduct(req: Request, res: Response): void {
  const { idUser, cartProduct } = req.body;
  userInfo
    .updateProductCart(idUser, cartProduct)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function delCartProduct(req: Request, res: Response): void {
  const { idUser, idProduct } = req.params;
  userInfo
    .deleteProductCart(idUser, idProduct)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

export { 
  getCart,
  createCart,
  updateCart,
  deleteCart,
  postCartProduct, 
  putCartProduct, 
  delCartProduct 
};
