import { LMUser } from "lionmiss-core";
import { LMBSearchParams } from "./LMB/index.js";

interface IUser {
  getUser: (id: string) => Promise<LMUser>;
  getUserAll: (params: LMBSearchParams) => Promise<LMUser[]>;
  postUser: (user: LMUser) => Promise<LMUser>;
  updateUser: (user: LMUser) => Promise<boolean>;
  deleteUser: (id: string) => Promise<boolean>;
}

export { IUser };
