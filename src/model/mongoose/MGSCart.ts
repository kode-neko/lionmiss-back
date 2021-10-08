import { LMCart, LMCartProduct, LMUserInfo } from "lionmiss-core";
import { model } from "mongoose";
import { ICart } from "../ICart";
import { LMBError } from "../LMB";

import { schemaCartProduct, schemaUserInfo } from "./schemas";

const UserInfoModel = model<LMUserInfo>("UserInfo", schemaUserInfo, "usrInfo");
const CartProduct = model<LMCartProduct>("CartProduct", schemaCartProduct);

class MGSCart implements ICart {
  getCart(idUser: string): Promise<LMCart | LMBError> {
    return UserInfoModel.findById(idUser)
      .then((userInfo) => Promise.resolve(userInfo?.cart))
      .catch((err) => Promise.reject({ error: err }));
  }

  postCart(idUser: string, cart: LMCart): Promise<boolean | LMBError> {
    return UserInfoModel.updateOne(
      { _id: idUser },
      { cart },
      { runValidators: true }
    )
      .then(({ modifiedCount }) => Promise.resolve(modifiedCount > 0))
      .catch((err) => Promise.reject({ error: err }));
  }

  updateCart(idUser: string, cart: LMCart): Promise<boolean | LMBError> {
    return UserInfoModel.findByIdAndUpdate(
      idUser,
      { $set: { ...cart } },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }

  deleteCart(idUser: string): Promise<boolean | LMBError> {
    return UserInfoModel.deleteOne({ _id: idUser })
      .then(({ deletedCount }) => Promise.resolve(deletedCount > 0))
      .catch((err) => Promise.reject({ error: err }));
  }

  postProductCart(
    idUser: string,
    cartProduct: LMCartProduct
  ): Promise<boolean | LMBError> {
    return CartProduct.findByIdAndUpdate(
      idUser,
      { $push: { "cart.products": cartProduct } },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }

  updateProductCart(
    idUser: string,
    cartProduct: LMCartProduct
  ): Promise<boolean | LMBError> {
    return UserInfoModel.findOneAndUpdate(
      {
        _id: idUser,
        "cart.products._id": cartProduct._id,
      },
      { $set: { "cart.products.$": { ...cartProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }

  deleteProductCart(
    idUser: string,
    idProduct: string
  ): Promise<boolean | LMBError> {
    return UserInfoModel.findByIdAndUpdate(
      idUser,
      { $pull: { "cart.products": { _id: idProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }
}

export { MGSCart };
