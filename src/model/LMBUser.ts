import { Schema, model } from "mongoose";
import { LMUser } from "lionmiss-core";

const userSchema = new Schema<LMUser>({
  username: { type: String, required: true },
  avatar: { type: String, required: true },
  lang: { type: String, required: true },
  currency: { type: String, required: true },
  measures: {
    chest: { type: Number, required: true },
    waist: { type: Number, required: true },
    hip: { type: Number, required: true },
    size: String,
  },
  email: { type: String, required: true },
  addresses: [
    {
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
    },
  ],
});

const UserModel = model<LMUser>("User", userSchema, "user");

export default UserModel;
