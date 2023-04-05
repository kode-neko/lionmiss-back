import { Schema } from "mongoose";
const schemaProductProps = new Schema({
    key: { type: String, required: true },
    value: { type: String, required: true },
}, { id: false });
export { schemaProductProps };
//# sourceMappingURL=schemaProductProps.js.map