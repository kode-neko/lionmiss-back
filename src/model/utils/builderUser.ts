import { IUser } from "../IUser.js";
import { MGSUser } from "../mongoose/index.js";

function builderUser(): IUser {
  return new MGSUser();
}

export { builderUser };
