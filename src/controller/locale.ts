import { Request, Response } from "express";
import { builderLocale } from "../model/utils";
import { statusErrorCode } from "./utils";

const locale = builderLocale();

function getLocaleAll(req: Request, res: Response): void {
  locale
    .getLocaleAll()
    .then((list) => res.status(200).json(list))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

export { getLocaleAll };
