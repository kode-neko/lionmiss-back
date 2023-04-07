import { LMBLocale } from "./LMB/index.js";

interface ILocale {
  getLocaleAll: () => Promise<LMBLocale[]>;
}

export { ILocale };
