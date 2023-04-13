import { LMCart, LMCartProduct, LMUser } from "lionmiss-core";
import { Model, model } from "mongoose";
import { ICart } from "../ICart.js";
import { schemaUser } from "./schemas/index.js";
import { UpdateResult, DeleteResult } from "mongodb";

class MGSCart implements ICart {
  UserModel: Model<LMUser> = model<LMUser>("User", schemaUser, "user");

  getCart(username: string): Promise<LMCart> {
    return this.UserModel.findOne({username})
      .then((user: LMUser) => user.userInfo.cart);
  }

  postCart(username: string, cart: LMCart): Promise<boolean> {
    return this.UserModel.updateOne(
      { username },
      { "userInfo.cart": cart },
      { runValidators: true }
    )
      .then(({ modifiedCount }: UpdateResult) => modifiedCount > 0);
  }

  updateCart(username: string, cart: LMCart): Promise<boolean> {
    return this.UserModel.findOneAndUpdate(
      {username},
      { $set: { "userInfo.cart": {...cart} } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }

  deleteCart(idUser: string): Promise<boolean> {
    return this.UserModel.deleteOne({ _id: idUser })
      .then(({ deletedCount }: DeleteResult) => deletedCount > 0);
  }

  postProductCart(
    username: string,
    cartProduct: LMCartProduct
  ): Promise<boolean> {
    return this.UserModel.findOneAndUpdate(
      {username},
      { $push: { "userInfo.cart.products": cartProduct } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }

  updateProductCart(
    username: string,
    cartProduct: LMCartProduct
  ): Promise<boolean> {
    return this.UserModel.findOneAndUpdate(
      {
        username,
        "userInfo.cart.products._id": cartProduct._id,
      },
      { $set: { "userInfo.cart.products.$": { ...cartProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }

  deleteProductCart(
    username: string,
    idProduct: string
  ): Promise<boolean> {
    return this.UserModel.findByIdAndUpdate(
      {username},
      { $pull: { "userInfo.cart.products": { _id: idProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }
}

export { MGSCart };
