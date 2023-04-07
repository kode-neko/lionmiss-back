import { LMCart, LMCartProduct, LMUser } from "lionmiss-core";
import { Model, model } from "mongoose";
import { ICart } from "../ICart.js";
import { schemaUser } from "./schemas/index.js";
import { UpdateResult, DeleteResult } from "mongodb";

class MGSCart implements ICart {
  UserModel: Model<LMUser> = model<LMUser>("User", schemaUser, "user");

  getCart(idUser: string): Promise<LMCart> {
    return this.UserModel.findById(idUser)
      .then((user: LMUser) => user.cart);
  }

  postCart(idUser: string, cart: LMCart): Promise<boolean> {
    return this.UserModel.updateOne(
      { _id: idUser },
      { cart },
      { runValidators: true }
    )
      .then(({ modifiedCount }: UpdateResult) => modifiedCount > 0);
  }

  updateCart(idUser: string, cart: LMCart): Promise<boolean> {
    return this.UserModel.findByIdAndUpdate(
      idUser,
      { $set: { ...cart } },
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
    idUser: string,
    cartProduct: LMCartProduct
  ): Promise<boolean> {
    return this.UserModel.findByIdAndUpdate(
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
    return this.UserModel.findOneAndUpdate(
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
    return this.UserModel.findByIdAndUpdate(
      idUser,
      { $pull: { "cart.products": { _id: idProduct } } },
      { runValidators: true }
    )
      .count()
      .then((count: number) => count > 0);
  }
}

export { MGSCart };
