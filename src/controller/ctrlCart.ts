import { Request, Response } from "express";
import { builderCart } from "../model";
import { statusErrorCode } from "./utils";
import { isEmpty } from "lodash";

const userInfo = builderCart();

function getCart(req: Request, res: Response): void {
  const { idUser } = req.params;
  userInfo
    .getCart(idUser)
    .then((cart) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err));
}

function postCartProduct(req: Request, res: Response): void {
  const { idUser, cartProduct } = req.body;
  userInfo
    .postProductCart(idUser, cartProduct)
    .then((ok) => res.status(ok ? 201 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function putCartProduct(req: Request, res: Response): void {
  const { idUser, cartProduct } = req.body;
  userInfo
    .updateProductCart(idUser, cartProduct)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function delCartProduct(req: Request, res: Response): void {
  const { idUser, idProduct } = req.params;
  userInfo
    .deleteProductCart(idUser, idProduct)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

export { getCart, postCartProduct, putCartProduct, delCartProduct };
