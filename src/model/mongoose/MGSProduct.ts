import { model } from "mongoose";
import { LMProduct } from "lionmiss-core";
import { IProduct } from "../IProduct";
import { schemaProduct } from "./schemas";
import { LMBError } from "../LMB";

class MGSProduct implements IProduct {
  ProductModel = model<LMProduct>("Product", schemaProduct, "product");

  getProduct(id: string): Promise<LMProduct | LMBError> {
    return this.ProductModel.findById(id)
      .then(Promise.resolve)
      .catch((err) => Promise.reject(err));
  }

  getProductAll(): Promise<LMProduct[] | LMBError> {
    return this.ProductModel.find({})
      .then(Promise.resolve)
      .catch((err) => Promise.reject(err));
  }

  postProduct(product: LMProduct): Promise<LMProduct | LMBError> {
    const productModel = new this.ProductModel(product);
    return productModel
      .validate()
      .then(() => productModel.save())
      .then((product) => Promise.resolve(product))
      .catch((err) => Promise.reject(err));
  }

  updateProduct(product: LMProduct): Promise<boolean | LMBError> {
    return this.ProductModel.findByIdAndUpdate(product._id, product, {
      runValidators: true,
    })
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }

  deleteProduct(id: string): Promise<boolean | LMBError> {
    return this.ProductModel.findByIdAndDelete(id)
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject(err));
  }
}

export { MGSProduct };
