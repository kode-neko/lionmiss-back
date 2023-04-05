import { ICountry } from "../ICountry.js";
import { MGSCountry } from "../mongoose/index.js";

function builderCountry(): ICountry {
  return new MGSCountry();
}

export { builderCountry };
