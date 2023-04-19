import {LMBLocale} from "../../model/LMB/LMBLocale";
import {rawLocales} from "./data/index";

const fixtureLocales: LMBLocale[] = rawLocales.map(
  (l: {[key: string]: string}) => ({
    name: l.name,
  })
);

export {fixtureLocales};
