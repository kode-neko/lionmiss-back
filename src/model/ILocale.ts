import { LMBError, LMBLocale } from "./LMB";

interface ILocale {
  getLocaleAll: () => Promise<LMBLocale[] | LMBError>;
}

export { ILocale };
