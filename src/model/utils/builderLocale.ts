import {ILocale} from "../ILocale";
import {MGSLocale} from "../mongoose/index";

function builderLocale(): ILocale {
  return new MGSLocale();
}

export {builderLocale};
