import { Request, Response } from "express";
import { builderProduct } from "../../model/utils";
import { statusErrorCode } from "./utils";
import { isEmpty } from "lodash";

const productModel = builderProduct();

function getProduct(req: Request, res: Response): void {
  const { id } = req.params;
  productModel
    .getProduct(id)
    .then((cart) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err));
}

function getProductAll(req: Request, res: Response): void {
  productModel
    .getProductAll()
    .then((list) => res.status(200).json(list))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function postProduct(req: Request, res: Response): void {
  const { product } = req.body;
  productModel
    .postProduct(product)
    .then((newProduct) => res.status(201).json(newProduct))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function updateProduct(req: Request, res: Response): void {
  const { product } = req.body;
  productModel
    .updateProduct(product)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function deleteProduct(req: Request, res: Response): void {
  const { id } = req.params;
  productModel
    .deleteProduct(id)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

export { getProduct, getProductAll, postProduct, updateProduct, deleteProduct };
