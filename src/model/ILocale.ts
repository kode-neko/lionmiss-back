import {LMBLocale} from "./LMB/index";

interface ILocale {
  getLocaleAll: () => Promise<LMBLocale[]>;
}

export {ILocale};
