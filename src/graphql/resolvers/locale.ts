import { LMBError, LMBLocale } from '../../model/LMB';
import { builderLocale } from "../../model/utils";

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