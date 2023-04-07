import { LMUser } from "lionmiss-core";
import { Document, Model, model } from "mongoose";
import { IUser } from "../IUser.js";
import { LMBSearchParams } from "../LMB/index.js";
import { schemaUser } from "./schemas/index.js";

type ModelLmUser = Document<unknown, unknown, LMUser> & Omit<LMUser, never>;

class MGSUser implements IUser {
  UserModel: Model<LMUser> = model<LMUser>("User", schemaUser, "user");

  getUser(id: string): Promise<LMUser> {
    return this.UserModel.findById(id)
      .then((user: LMUser) => user);
  }

  getUserAll({limit, offset, search = {}}: LMBSearchParams): Promise<LMUser[]> {
    return this.UserModel.find(search)
      .skip(offset)
      .limit(limit)
      .then((list: LMUser[]) => list);
  }

  postUser(user: LMUser): Promise<LMUser> {
    const userModel: ModelLmUser = new this.UserModel(user);
    return userModel.validate()
      .then(() => userModel.save())
      .then(user => user);
  }

  updateUser(user: LMUser): Promise<boolean> {
    return this.UserModel.findOneAndUpdate(
      { user: user },
      { ...user },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }

  deleteUser(id: string): Promise<boolean> {
    return this.UserModel.findByIdAndDelete(id)
      .count()
      .then((count: number) => count > 0);
  }
}

export { MGSUser };
