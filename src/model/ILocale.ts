import { LMBError, LMBLocale } from "./LMB/index.js";

interface ILocale {
  getLocaleAll: () => Promise<LMBLocale[] | LMBError>;
}

export { ILocale };
