import { LMCountry } from "lionmiss-core";

interface ICountry {
  getCountry: (id: string) => Promise<LMCountry>;
  getCountryAll: () => Promise<LMCountry[]>;
}

export { ICountry };
