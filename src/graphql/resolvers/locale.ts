import { LMBError, LMBLocale } from '../../model/LMB/index.js';
import { builderLocale } from "../../model/utils/index.js";

// Model Builders
const localeModel = builderLocale();

// Resolvers
const cartResolvers = {
  Query: {
    locales: async (): Promise<LMBLocale[]|LMBError> => 
      await localeModel.getLocaleAll(),
  }
};

export default cartResolvers;