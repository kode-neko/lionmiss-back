import { Schema } from "mongoose";
const schemaCountry = new Schema({
    name: { type: String, required: true },
    nameCode: { type: String, required: true },
    currency: { type: String, required: true },
    currencyName: { type: String, required: true },
}, { id: false });
export { schemaCountry };
//# sourceMappingURL=schemaCountry.js.map