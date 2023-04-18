import {IUser} from "../IUser";
import {MGSUser} from "../mongoose/index";

function builderUser(): IUser {
  return new MGSUser();
}

export {builderUser};
