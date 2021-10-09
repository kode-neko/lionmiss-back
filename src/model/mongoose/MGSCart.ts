import { LMCart, LMCartProduct, LMUserInfo } from "lionmiss-core";
import { model } from "mongoose";
import { ICart } from "../ICart";
import { LMBError } from "../LMB";
import { schemaUserInfo } from "./schemas";

class MGSCart implements ICart {
  UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "userInfo");

  getCart(idUser: string): Promise<LMCart | LMBError> {
    return this.UserInfoModel.findById(idUser)
      .then((userInfo) => Promise.resolve(userInfo ? userInfo.cart : {}))
      .catch((err) => Promise.reject(err));
  }

  postCart(idUser: string, cart: LMCart): Promise<boolean | LMBError> {
    return this.UserInfoModel.updateOne(
      { _id: idUser },
      { cart },
      { runValidators: true }
    )
      .then(({ modifiedCount }) => Promise.resolve(modifiedCount > 0))
      .catch((err) => Promise.reject(err));
  }

  updateCart(idUser: string, cart: LMCart): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndUpdate(
      idUser,
      { $set: { ...cart } },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }

  deleteCart(idUser: string): Promise<boolean | LMBError> {
    return this.UserInfoModel.deleteOne({ _id: idUser })
      .then(({ deletedCount }) => Promise.resolve(deletedCount > 0))
      .catch((err) => Promise.reject(err));
  }

  postProductCart(
    idUser: string,
    cartProduct: LMCartProduct
  ): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndUpdate(
      idUser,
      { $push: { "cart.products": cartProduct } },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }

  updateProductCart(
    idUser: string,
    cartProduct: LMCartProduct
  ): Promise<boolean | LMBError> {
    return this.UserInfoModel.findOneAndUpdate(
      {
        _id: idUser,
        "cart.products._id": cartProduct._id,
      },
      { $set: { "cart.products.$": { ...cartProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }

  deleteProductCart(
    idUser: string,
    idProduct: string
  ): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndUpdate(
      idUser,
      { $pull: { "cart.products": { _id: idProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }
}

export { MGSCart };
