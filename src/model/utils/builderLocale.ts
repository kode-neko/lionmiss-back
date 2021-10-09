import { ILocale } from "../ILocale";
import { MGSLocale } from "../mongoose";

function builderLocale(): ILocale {
  return new MGSLocale();
}

export { builderLocale };
