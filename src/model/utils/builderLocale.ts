import { ILocale } from "../ILocale.js";
import { MGSLocale } from "../mongoose/index.js";

function builderLocale(): ILocale {
  return new MGSLocale();
}

export { builderLocale };
