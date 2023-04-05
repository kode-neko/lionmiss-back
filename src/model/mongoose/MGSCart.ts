import { LMCart, LMCartProduct, LMUserInfo } from "lionmiss-core";
import { model } from "mongoose";
import { ICart } from "../ICart.js";
import { LMBError } from "../LMB/index.js";
import { schemaUserInfo } from "./schemas/index.js";

class MGSCart implements ICart {
  UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "userInfo");

  getCart(idUser: string): Promise<LMCart | LMBError> {
    return this.UserInfoModel.findById(idUser)
      .then(userInfo => userInfo ? userInfo.cart : {})
      .catch(err => err);
  }

  postCart(idUser: string, cart: LMCart): Promise<boolean | LMBError> {
    return this.UserInfoModel.updateOne(
      { _id: idUser },
      { cart },
      { runValidators: true }
    )
      .then(({ modifiedCount }) => modifiedCount > 0)
      .catch(err => err);
  }

  updateCart(idUser: string, cart: LMCart): Promise<boolean | LMBError> {
    return this.UserInfoModel.findByIdAndUpdate(
      idUser,
      { $set: { ...cart } },
      { runValidators: true }
    )
      .count()
      .then(count => count > 0)
      .catch(err => err);
  }

  deleteCart(idUser: string): Promise<boolean | LMBError> {
    return this.UserInfoModel.deleteOne({ _id: idUser })
      .then(({ deletedCount }) => deletedCount > 0)
      .catch(err => err);
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
      .then(count => count > 0)
      .catch(err => err);
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
      .then(count => count > 0)
      .catch(err => err);
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
      .then(count => count > 0)
      .catch(err => err);
  }
}

export { MGSCart };
