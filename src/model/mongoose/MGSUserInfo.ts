import { LMUserInfo } from "lionmiss-core";
import { model } from "mongoose";
import { IUserInfo } from "../IUserInfo";
import { LMBError } from "../LMB";
import { schemaUserInfo } from "./schemas";

class MGSUserInfo implements IUserInfo {
  UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "userInfo");

  getUserInfo(id: string): Promise<LMUserInfo | LMBError> {
    return this.UserInfoModel.findById(id)
      .then((userInfo) => Promise.resolve(userInfo ? userInfo.user : {}))
      .catch((err) => Promise.reject(err));
  }

  getUserInfoAll(): Promise<LMUserInfo[] | LMBError> {
    return this.UserInfoModel.find({})
      .then((usersInfoList) => Promise.resolve(usersInfoList))
      .catch((err) => Promise.reject(err));
  }

  postUserInfo(userInfo: LMUserInfo): Promise<LMUserInfo | LMBError> {
    const userInfoModel = new this.UserInfoModel(userInfo);
    return userInfoModel.validate()
      .then(() => userInfoModel.save())
      .then((userInfo) => Promise.resolve(userInfo))
      .catch((err) => Promise.reject(err));
  }

  updateUserInfo(id: string, userInfo: LMUserInfo): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndUpdate(
      id,
      { ...userInfo },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }

  deleteUser(id: string): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndDelete(id)
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }
}

export { MGSUserInfo };
