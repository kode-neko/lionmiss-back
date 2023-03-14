import { Request, Response } from "express";
import { builderShipping } from "../../model/utils";
import { statusErrorCode } from "./utils";
import { isEmpty } from "lodash";

const shippingModel = builderShipping();

function getShipping(req: Request, res: Response): void {
  const { id } = req.body;
  shippingModel
    .getShipping(id)
    .then((cart) => res.status(isEmpty(cart) ? 404 : 200).json(cart))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err));
}

function getShippingAll(req: Request, res: Response): void {
  shippingModel
    .getShippingAll()
    .then((list) => res.status(200).json(list))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function postShipping(req: Request, res: Response): void {
  const { shipping } = req.body;
  shippingModel
    .postShipping(shipping)
    .then((newShipping) => res.status(201).json(newShipping))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function updateShipping(req: Request, res: Response): void {
  const { shipping } = req.body;
  shippingModel
    .updateShipping(shipping)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

function deleteShipping(req: Request, res: Response): void {
  const { id } = req.body;
  shippingModel
    .deleteShipping(id)
    .then((ok) => res.status(ok ? 200 : 404))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

export {
  getShipping,
  getShippingAll,
  postShipping,
  updateShipping,
  deleteShipping,
};
