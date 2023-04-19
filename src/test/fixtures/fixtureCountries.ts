import {LMCountry} from "lionmiss-core";
import {rawCountries} from "./data/index";

const fixtureCountries: LMCountry[] = rawCountries.map((c) => ({
  name: c.country,
  nameCode: c.country_iso_2_char_code,
  currency: c.currency_iso_3_char_code,
  currencyName: c.currency_name,
}));

export {fixtureCountries};
