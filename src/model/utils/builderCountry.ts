import { ICountry } from "../ICountry";
import { MGSCountry } from "../mongoose";

function builderCountry(): ICountry {
  return new MGSCountry();
}

export { builderCountry };
