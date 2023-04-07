import { LMCart, LMCartProduct, LMUserInfo } from "lionmiss-core";
import { Model, model } from "mongoose";
import { ICart } from "../ICart.js";
import { schemaUser } from "./schemas/index.js";
import { UpdateResult, DeleteResult } from "mongodb";

class MGSCart implements ICart {
  UserInfoModel: Model<LMUserInfo> = model<LMUserInfo>("UserInfo", schemaUser, "userInfo");

  getCart(idUser: string): Promise<LMCart> {
    return this.UserInfoModel.findById(idUser)
      .then((userInfo: LMUserInfo) => userInfo.cart);
  }

  postCart(idUser: string, cart: LMCart): Promise<boolean> {
    return this.UserInfoModel.updateOne(
      { _id: idUser },
      { cart },
      { runValidators: true }
    )
      .then(({ modifiedCount }: UpdateResult) => modifiedCount > 0);
  }

  updateCart(idUser: string, cart: LMCart): Promise<boolean> {
    return this.UserInfoModel.findByIdAndUpdate(
      idUser,
      { $set: { ...cart } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }

  deleteCart(idUser: string): Promise<boolean> {
    return this.UserInfoModel.deleteOne({ _id: idUser })
      .then(({ deletedCount }: DeleteResult) => deletedCount > 0);
  }

  postProductCart(
    idUser: string,
    cartProduct: LMCartProduct
  ): Promise<boolean> {
    return this.UserInfoModel.findByIdAndUpdate(
      idUser,
      { $push: { "cart.products": cartProduct } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }

  updateProductCart(
    idUser: string,
    cartProduct: LMCartProduct
  ): Promise<boolean> {
    return this.UserInfoModel.findOneAndUpdate(
      {
        _id: idUser,
        "cart.products._id": cartProduct._id,
      },
      { $set: { "cart.products.$": { ...cartProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }

  deleteProductCart(
    idUser: string,
    idProduct: string
  ): Promise<boolean> {
    return this.UserInfoModel.findByIdAndUpdate(
      idUser,
      { $pull: { "cart.products": { _id: idProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }
}

export { MGSCart };
