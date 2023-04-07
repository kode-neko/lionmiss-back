import { Request, Response } from "express";
import { builderShipping } from "../../model/utils/index.js";
import isEmpty from "is-obj-empty";
import { IShipping } from "../../model/index.js";
import { LMShipping } from "lionmiss-core";

const shippingModel: IShipping = builderShipping();

function getShipping(req: Request, res: Response): void {
  const { id } = req.body;
  shippingModel
    .getShipping(id)
    .then((shipping: LMShipping) => res.status(isEmpty(shipping) ? 404 : 200).json(shipping));
}

function getShippingAll(req: Request, res: Response): void {
  const { limit, offset, search } = req.body;
  shippingModel
    .getShippingAll({ limit, offset, search })
    .then((list: LMShipping[]) => res.status(200).json(list));
}

function postShipping(req: Request, res: Response): void {
  const { shipping } = req.body;
  shippingModel
    .postShipping(shipping)
    .then((shipping: LMShipping) => res.status(201).json(shipping));
}

function updateShipping(req: Request, res: Response): void {
  const { shipping } = req.body;
  shippingModel
    .updateShipping(shipping)
    .then((ok: boolean) => res.status(ok ? 200 : 404));
}

function deleteShipping(req: Request, res: Response): void {
  const { id } = req.body;
  shippingModel
    .deleteShipping(id)
    .then((ok: boolean) => res.status(ok ? 200 : 404));
}

export {
  getShipping,
  getShippingAll,
  postShipping,
  updateShipping,
  deleteShipping,
};
