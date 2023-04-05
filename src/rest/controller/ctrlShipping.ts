import { Request, Response } from "express";
import { builderShipping } from "../../model/utils/index.js";
import { statusErrorCode } from "./utils/index.js";
import { isEmpty } from "lodash";
import { IShipping } from "../../model/index.js";
import { LMShipping } from "lionmiss-core";
import { LMBError } from "../../model/LMB/index.js";

const shippingModel: IShipping = builderShipping();

function getShipping(req: Request, res: Response): void {
  const { id } = req.body;
  shippingModel
    .getShipping(id)
    .then((shipping: LMShipping | LMBError) => res.status(isEmpty(shipping) ? 404 : 200).json(shipping))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function getShippingAll(req: Request, res: Response): void {
  shippingModel
    .getShippingAll()
    .then((list: LMShipping[] | LMBError) => res.status(200).json(list))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function postShipping(req: Request, res: Response): void {
  const { shipping } = req.body;
  shippingModel
    .postShipping(shipping)
    .then((shipping: LMShipping | LMBError) => res.status(201).json(shipping))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function updateShipping(req: Request, res: Response): void {
  const { shipping } = req.body;
  shippingModel
    .updateShipping(shipping)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

function deleteShipping(req: Request, res: Response): void {
  const { id } = req.body;
  shippingModel
    .deleteShipping(id)
    .then((ok: boolean | LMBError) => res.status(ok ? 200 : 404))
    .catch((err: LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

export {
  getShipping,
  getShippingAll,
  postShipping,
  updateShipping,
  deleteShipping,
};
