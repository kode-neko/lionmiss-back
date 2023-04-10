import { LMBLocale } from "../../model/LMB/LMBLocale.js";
import { rawLocales } from "./data/index.js";

const fixtureLocales: LMBLocale[] = rawLocales.map((l: {[key: string]: string}) => ({
  name: l.name,
}));

export { fixtureLocales };
