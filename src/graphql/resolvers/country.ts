import { LMCountry } from 'lionmiss-core';
import { LMBError } from '../../model/LMB';
import { builderCountry } from "../../model/utils";

const countryModel = builderCountry();

const productResolvers = {
  Query: {
    countries: async (): Promise<LMCountry[]|LMBError> => await countryModel.getCountryAll(),
  }
};

export default productResolvers;