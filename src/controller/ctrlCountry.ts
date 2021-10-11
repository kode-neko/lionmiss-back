import { Request, Response } from "express";
import { builderCountry } from "../model/utils/builderCountry";
import { statusErrorCode } from "./utils";

const country = builderCountry();

function getCountryAll(req: Request, res: Response): void {
  country
    .getCountryAll()
    .then((countryList) => res.status(200).json(countryList))
    .catch((err) => res.status(statusErrorCode(err.name)).json(err.message));
}

export { getCountryAll };
