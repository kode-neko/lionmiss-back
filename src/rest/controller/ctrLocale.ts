import { Request, Response } from "express";
import { builderLocale } from "../../model/utils/index.js";
import { ILocale } from "../../model/index.js";
import { LMBLocale } from "../../model/LMB/index.js";

const locale: ILocale = builderLocale();

function getLocaleAll(req: Request, res: Response): void {
  locale
    .getLocaleAll()
    .then((list: LMBLocale[]) => res.status(200).json(list));
}

export { getLocaleAll };
