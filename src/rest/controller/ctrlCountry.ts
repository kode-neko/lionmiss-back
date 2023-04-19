import {Request, Response} from "express";
import {builderCountry} from "../../model/utils/builderCountry";
import {LMBError} from "../../model/LMB/index";
import {LMCountry} from "lionmiss-core";
import {ICountry} from "../../model/index";

const country: ICountry = builderCountry();

function getCountryAll(req: Request, res: Response): void {
  country
    .getCountryAll()
    .then((countryList: LMCountry[] | LMBError) =>
      res.status(200).json(countryList)
    );
}

export {getCountryAll};
