import { Request, Response } from "express";
import { builderCart } from "../model";
import { statusErrorCode } from "./utils";

const userInfo = builderCart();

function getCart(req: Request, res: Response): void {
  const { id } = req.body;
  userInfo
    .getCart(id)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json(err));
}

function postCartProduct(req: Request, res: Response): void {
  const { idUser, cartProduct } = req.body;
  userInfo
    .postProductCart(idUser, cartProduct)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function putCartProduct(req: Request, res: Response): void {
  const { idUser, cartProduct } = req.body;
  userInfo
    .updateProductCart(idUser, cartProduct)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function delCartProduct(req: Request, res: Response): void {
  const { idUser, idProduct } = req.body;
  userInfo
    .deleteProductCart(idUser, idProduct)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

export { getCart, postCartProduct, putCartProduct, delCartProduct };
