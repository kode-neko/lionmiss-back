import { Request, Response } from "express";
import { builderLocale } from "../../model/utils/index.js";
import { statusErrorCode } from "./utils/index.js";
import { ILocale } from "../../model/index.js";
import { LMBError, LMBLocale } from "../../model/LMB/index.js";

const locale: ILocale = builderLocale();

function getLocaleAll(req: Request, res: Response): void {
  locale
    .getLocaleAll()
    .then((list: LMBLocale[] | LMBError) => res.status(200).json(list))
    .catch((err:LMBError) => res.status(statusErrorCode(err.msg as string)).json(err));
}

export { getLocaleAll };
