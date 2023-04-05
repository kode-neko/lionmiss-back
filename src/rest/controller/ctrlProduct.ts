import { Request, Response } from "express";
import { builderProduct } from "../../model/utils/index.js";
import { statusErrorCode } from "./utils/index.js";
import { isEmpty } from "lodash";
import { IProduct } from "../../model/index.js";
import { LMProduct } from "lionmiss-core";
import { LMBError } from "../../model/LMB/index.js";

const productModel: IProduct = builderProduct();

function getProduct(req: Request, res: Response): void {
  const { id } = req.params;
  productModel
    .getProduct(id)
    .then((cart: LMProduct | LMBError) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function getProductAll(req: Request, res: Response): void {
  productModel
    .getProductAll()
    .then((list: LMProduct[] | LMBError) => res.status(200).json(list))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function postProduct(req: Request, res: Response): void {
  const { product } = req.body;
  productModel
    .postProduct(product)
    .then((newProduct: LMProduct | LMBError) => res.status(201).json(newProduct))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function updateProduct(req: Request, res: Response): void {
  const { product } = req.body;
  productModel
    .updateProduct(product)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function deleteProduct(req: Request, res: Response): void {
  const { id } = req.params;
  productModel
    .deleteProduct(id)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

export { getProduct, getProductAll, postProduct, updateProduct, deleteProduct };
