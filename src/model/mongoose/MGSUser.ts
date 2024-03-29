import {UpdateResult} from "mongodb";
import {LMUser} from "lionmiss-core";
import {Document, Model, model} from "mongoose";
import {IUser} from "../IUser";
import {LMBSearchParams, LMBUser} from "../LMB/index";
import {schemaUser} from "./schemas/index";
// import {genSaltSync, hashSync} from "bcrypt";

type ModelLMUser = Document<unknown, unknown, LMUser> & Omit<LMUser, never>;

class MGSUser implements IUser {
  UserModel: Model<LMUser> = model<LMUser>("User", schemaUser, "user");

  getUser(username: string): Promise<LMBUser> {
    return this.UserModel.findOne({username}).then((user: LMUser) => ({
      username: user.username,
      ...user.userInfo,
    }));
  }

  getUserAll({
    limit,
    offset,
    search = {},
  }: LMBSearchParams): Promise<LMBUser[]> {
    return this.UserModel.find(search)
      .skip(offset)
      .limit(limit)
      .then((list: LMUser[]) =>
        list.map((user: LMUser) => ({
          username: user.username,
          ...user.userInfo,
        }))
      );
  }

  postUser(user: LMBUser): Promise<LMBUser> {
    const {username, pass, ...userInfo} = user;
    // const salt: string = genSaltSync();
    // const hash: string = hashSync(pass, salt);
    const userPersist: LMUser = {
      username,
      // pass: hash,
      pass,
      userInfo,
    };
    const userModel: ModelLMUser = new this.UserModel(userPersist);
    const userRes: LMBUser = {
      username,
      ...userPersist.userInfo,
    };
    return userModel
      .validate()
      .then(() => userModel.save())
      .then(() => userRes);
  }

  updateUser(user: LMBUser): Promise<boolean> {
    const {username, pass, ...rest} = user;
    return this.UserModel.findOne({username})
      .then((found: LMUser) => {
        /* let hash: string;
        if (pass) {
          const salt: string = genSaltSync();
          hash = hashSync(pass, salt);
        } else {
          hash = found.pass;
        } */
        const userUpdate: LMUser = {
          _id: found._id,
          username,
          // pass: hash,
          pass,
          userInfo: {...rest},
        };
        return this.UserModel.updateOne({username}, userUpdate);
      })
      .then(({modifiedCount}: UpdateResult) => modifiedCount > 0);
  }

  deleteUser(username: string): Promise<boolean> {
    return this.UserModel.deleteOne({username})
      .count()
      .then((count: number) => count > 0);
  }

  getUserByName(username: string): Promise<LMUser> {
    return this.UserModel.findOne({username}).then((user: LMUser) => user);
  }
}

export {MGSUser};
