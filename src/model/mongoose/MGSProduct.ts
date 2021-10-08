import { model } from "mongoose";
import { LMProduct } from "lionmiss-core";
import { IProduct } from "../IProduct";
import { schemaProduct } from "./schemas";
import { LMBError } from "../LMB";

const ProductModel = model<LMProduct>("Product", schemaProduct, "product");

class MGSProduct implements IProduct {
  getProduct(id: string): Promise<LMProduct | LMBError> {
    return ProductModel.findById(id)
      .then(Promise.resolve)
      .catch((err) => Promise.reject({ error: err }));
  }

  getProductAll(): Promise<LMProduct[] | LMBError> {
    return ProductModel.find({})
      .then(Promise.resolve)
      .catch((err) => Promise.reject({ error: err }));
  }

  postProduct(product: LMProduct): Promise<boolean | LMBError> {
    const productModel = new ProductModel(product);
    return productModel
      .validate()
      .then(() => productModel.save())
      .then(() => Promise.resolve(true))
      .catch((err) => Promise.reject({ error: err }));
  }

  updateProduct(product: LMProduct): Promise<boolean | LMBError> {
    return ProductModel.findByIdAndUpdate(product._id, product, {
      runValidators: true,
    })
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }

  deleteProduct(id: string): Promise<boolean | LMBError> {
    return ProductModel.findByIdAndDelete(id)
      .count()
      .then((count) => Promise.resolve(count > 0))
      .catch((err) => Promise.reject({ error: err }));
  }
}

export { MGSProduct };
