import { Request, Response } from "express";
import { builderCountry } from "../../model/utils/builderCountry.js";
import { LMBError } from "../../model/LMB/index.js";
import { LMCountry } from "lionmiss-core";
import { ICountry } from "../../model/index.js";

const country: ICountry = builderCountry();

function getCountryAll(req: Request, res: Response): void {
  country
    .getCountryAll()
    .then((countryList: LMCountry[] | LMBError) => res.status(200).json(countryList));
}

export { getCountryAll };
