import { schemaCart } from "./schemaCart";
import { Schema } from "mongoose";
import { LMUserInfo } from "lionmiss-core";
import { schemaUser } from "./schemaUser";

const schemaUserInfo = new Schema<LMUserInfo>({
  cart: schemaCart,
  user: schemaUser,
  favProducts: [String],
});
export { schemaUserInfo };
