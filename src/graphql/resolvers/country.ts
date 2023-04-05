import { LMCountry } from 'lionmiss-core';
import { LMBError } from '../../model/LMB/index.js';
import { builderCountry } from "../../model/utils/index.js";

const countryModel = builderCountry();

const productResolvers = {
  Query: {
    countries: async (): Promise<LMCountry[]|LMBError> => await countryModel.getCountryAll(),
  }
};

export default productResolvers;