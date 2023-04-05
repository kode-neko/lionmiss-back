import { rawCountries } from "./data/index.js";

const fixtureCountries = rawCountries.map((c) => ({
  name: c.country,
  nameCode: c.country_iso_2_char_code,
  currency: c.currency_iso_3_char_code,
  currencyName: c.currency_name,
}));

export { fixtureCountries };
