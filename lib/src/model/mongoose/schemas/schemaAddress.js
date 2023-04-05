import { Schema } from "mongoose";
const schemaAddress = new Schema({
    name: { type: String, required: true },
    adress: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    town: { type: String, required: true },
    zip: { type: String, required: true },
    phone: { type: String, required: true },
    mail: { type: String, required: true },
    comments: { type: String, required: true },
    main: { type: Boolean, required: true },
}, { id: false });
export { schemaAddress };
//# sourceMappingURL=schemaAddress.js.map