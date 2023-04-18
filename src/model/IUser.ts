import {LMUser} from "lionmiss-core";
import {LMBSearchParams, LMBUser} from "./LMB/index";

interface IUser {
  getUser: (id: string) => Promise<LMBUser>;
  getUserAll: (params: LMBSearchParams) => Promise<LMBUser[]>;
  postUser: (user: LMBUser) => Promise<LMBUser>;
  updateUser: (user: LMBUser) => Promise<boolean>;
  deleteUser: (id: string) => Promise<boolean>;
  getUserByName: (username: string) => Promise<LMUser>;
}

export {IUser};
