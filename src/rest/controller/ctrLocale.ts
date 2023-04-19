import {Request, Response} from "express";
import {builderLocale} from "../../model/utils/index";
import {ILocale} from "../../model/index";
import {LMBLocale} from "../../model/LMB/index";

const locale: ILocale = builderLocale();

function getLocaleAll(req: Request, res: Response): void {
  locale.getLocaleAll().then((list: LMBLocale[]) => res.status(200).json(list));
}

export {getLocaleAll};
