import { LMUser, LMUserInfo } from "lionmiss-core";
import { model } from "mongoose";
import { IUserInfo } from "../IUserInfo";
import { LMBError } from "../LMB";
import { schemaUserInfo } from "./schemas";

class MGSUserInfo implements IUserInfo {
  UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "userInfo");

  getUser(id: string): Promise<LMUser | LMBError> {
    return this.UserInfoModel.findById(id)
      .then((userInfo) => Promise.resolve(userInfo.user))
      .catch((err) => Promise.reject({ ...err }));
  }

  getUserAll(): Promise<LMUser[] | LMBError> {
    return this.UserInfoModel.find({}, { user: 1 })
      .then((usersInfo) => Promise.resolve(usersInfo.map((u) => u.user)))
      .catch((err) => Promise.reject({ ...err }));
  }

  postUser(user: LMUser): Promise<boolean | LMBError> {
    const userInfoModel = new this.UserInfoModel(user);
    return this.UserInfoModel.validate()
      .then(() => userInfoModel.save())
      .then(() => Promise.resolve(true))
      .catch((err) => Promise.reject({ ...err }));
  }

  updateUser(id: string, user: LMUser): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndUpdate(
      id,
      { user: user },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ ...err }));
  }

  deleteUser(id: string): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndDelete(id)
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ ...err }));
  }
}

export { MGSUserInfo };
