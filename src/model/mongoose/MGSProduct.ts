import { model } from "mongoose";
import { LMProduct } from "lionmiss-core";
import { IProduct } from "../IProduct.js";
import { schemaProduct } from "./schemas/index.js";
import { LMBError } from "../LMB/index.js";

class MGSProduct implements IProduct {
  ProductModel = model<LMProduct>("Product", schemaProduct, "product");

  getProduct(id: string): Promise<LMProduct | LMBError> {
    return this.ProductModel.findById(id)
      .then(product => product)
      .catch(err => err);
  }

  getProductAll(): Promise<LMProduct[] | LMBError> {
    return this.ProductModel.find({})
      .then(list => list)
      .catch(err => err);
  }

  postProduct(product: LMProduct): Promise<LMProduct | LMBError> {
    const productModel = new this.ProductModel(product);
    return productModel
      .validate()
      .then(() => productModel.save())
      .then(product => product)
      .catch(err => err);
  }

  updateProduct(product: LMProduct): Promise<boolean | LMBError> {
    return this.ProductModel.findByIdAndUpdate(product._id, product, {
      runValidators: true,
    })
      .count()
      .then(count => count > 0)
      .catch(err => err);
  }

  deleteProduct(id: string): Promise<boolean | LMBError> {
    return this.ProductModel.findByIdAndDelete(id)
      .count()
      .then(count => count > 0)
      .catch(err => err);
  }
}

export { MGSProduct };
