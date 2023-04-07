import { Request, Response } from "express";
import { ICart } from "../../model/index.js";
import isEmpty from "is-obj-empty";
import { LMCart } from "lionmiss-core";
import { builderCart } from "../../model/utils/builderCart.js";

const userInfo: ICart = builderCart();

function getCart(req: Request, res: Response): void {
  const { idUser } = req.params;
  userInfo
    .getCart(idUser)
    .then((cart: LMCart) => res.status(isEmpty(cart) ? 404 : 200).json(cart));
}

function createCart(req: Request, res: Response): void {
  const { idUser, cart } = req.body;
  userInfo
    .postCart(idUser, cart)
    .then((ok: boolean) => res.status(ok ? 201 : 404));
}

function updateCart(req: Request, res: Response): void {
  const { idUser, cart } = req.body;
  userInfo
    .updateCart(idUser, cart)
    .then((ok: boolean) => res.status(ok ? 200 : 404));
}

function deleteCart(req: Request, res: Response): void {
  const { idUser } = req.params;
  userInfo
    .deleteCart(idUser)
    .then((ok: boolean) => res.status(ok ? 200 : 404));
}

function postCartProduct(req: Request, res: Response): void {
  const { idUser, cartProduct } = req.body;
  userInfo
    .postProductCart(idUser, cartProduct)
    .then((ok: boolean) => res.status(ok ? 201 : 404));
}

function putCartProduct(req: Request, res: Response): void {
  const { idUser, cartProduct } = req.body;
  userInfo
    .updateProductCart(idUser, cartProduct)
    .then((ok: boolean) => res.status(ok ? 200 : 404));
}

function delCartProduct(req: Request, res: Response): void {
  const { idUser, idProduct } = req.params;
  userInfo
    .deleteProductCart(idUser, idProduct)
    .then((ok: boolean) => res.status(ok ? 200 : 404));
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
