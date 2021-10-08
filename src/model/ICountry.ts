import { LMCountry } from "lionmiss-core";
import { LMBError } from "./LMB";

interface ICountry {
  getCountry: (id: string) => Promise<LMCountry | LMBError>;
  getCountryAll: () => Promise<LMCountry[] | LMBError>;
}

export { ICountry };
