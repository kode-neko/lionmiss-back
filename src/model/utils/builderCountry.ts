import {ICountry} from "../ICountry";
import {MGSCountry} from "../mongoose/index";

function builderCountry(): ICountry {
  return new MGSCountry();
}

export {builderCountry};
