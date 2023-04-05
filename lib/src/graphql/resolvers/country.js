import { builderCountry } from "../../model/utils/index.js";
const countryModel = builderCountry();
const productResolvers = {
    Query: {
        countries: async () => await countryModel.getCountryAll(),
    }
};
export default productResolvers;
//# sourceMappingURL=country.js.map