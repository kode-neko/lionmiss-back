import {Request, Response} from "express";
import {builderProduct} from "../../model/utils/index";
import isEmpty from "empty-lite";
import {IProduct} from "../../model/index";
import {LMProduct} from "lionmiss-core";

const productModel: IProduct = builderProduct();

function getProduct(req: Request, res: Response): void {
  const {id} = req.params;
  productModel
    .getProduct(id)
    .then((cart: LMProduct) =>
      res.status(isEmpty(cart) ? 404 : 200).json(cart)
    );
}

function getProductAll(req: Request, res: Response): void {
  const {limit, offset, search} = req.body;
  const searchObj: {[key: string]: string} = search === "" ? {} : {name: search};
  productModel
    .getProductAll({limit: Number(limit), offset: Number(offset), search: searchObj})
    .then((list: LMProduct[]) => res.status(200).json(list));
}

function postProduct(req: Request, res: Response): void {
  const product: Omit<LMProduct, "_id"> = req.body;
  productModel
    .postProduct(product)
    .then((newProduct: LMProduct) => res.status(201).json(newProduct));
}

function updateProduct(req: Request, res: Response): void {
  const product: LMProduct = req.body;
  productModel
    .updateProduct(product)
    .then((ok: boolean) => res.status(ok ? 200 : 404));
}

function deleteProduct(req: Request, res: Response): void {
  const {id} = req.params;
  productModel
    .deleteProduct(id)
    .then((ok: boolean) => res.status(ok ? 200 : 404));
}

export {getProduct, getProductAll, postProduct, updateProduct, deleteProduct};
