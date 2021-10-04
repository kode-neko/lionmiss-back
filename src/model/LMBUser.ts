import { Schema, model } from "mongoose";
import { LMAddress, LMMeasures, LMUser, LMUserInfo } from "lionmiss-core";
import { cartSchema } from "./LMBCart";

const adressSchema = new Schema<LMAddress>({
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
});

const measuresSchema = new Schema<LMMeasures>({
  chest: { type: Number, required: true },
  waist: { type: Number, required: true },
  hip: { type: Number, required: true },
  size: { type: String, required: true },
});

const userSchema = new Schema<LMUser>({
  username: { type: String, required: true },
  avatar: { type: String, required: true },
  lang: { type: String, required: true },
  currency: { type: String, required: true },
  measures: measuresSchema,
  email: { type: String, required: true },
  addresses: [adressSchema],
});

const userInfoSchema = new Schema<LMUserInfo>({
  cart: cartSchema,
  user: userSchema,
  favProducts: [String],
});

const UserInfoModel = model<LMUser>("User", userSchema, "user");

export {
  adressSchema,
  measuresSchema,
  userSchema,
  userInfoSchema,
  UserInfoModel,
};
