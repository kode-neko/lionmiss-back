import { Document, Model, model } from "mongoose";
import { LMProduct } from "lionmiss-core";
import { IProduct } from "../IProduct.js";
import { schemaProduct } from "./schemas/index.js";
import { LMBSearchParams } from "../LMB/index.js";

type ModelLMProduct = Document<unknown, unknown, LMProduct> & Omit<LMProduct & Required<{ _id: string; }>, never>;

class MGSProduct implements IProduct {
  ProductModel: Model<LMProduct> = model<LMProduct>("Product", schemaProduct, "product");

  getProduct(id: string): Promise<LMProduct> {
    return this.ProductModel.findById(id)
      .then((product: LMProduct) => product);
  }

  getProductAll({limit, offset, search = {}}: LMBSearchParams): Promise<LMProduct[]> {
    return this.ProductModel.find(search)
      .skip(offset)
      .limit(limit)
      .then((list: LMProduct[]) => list);
  }

  postProduct(product: LMProduct): Promise<LMProduct> {
    const productModel: ModelLMProduct = new this.ProductModel(product);
    return productModel.validate()
      .then(() => productModel.save())
      .then((product: LMProduct) => product);
  }

  updateProduct(product: LMProduct): Promise<boolean> {
    return this.ProductModel.findByIdAndUpdate(product._id, product, {
      runValidators: true,
    })
      .count()
      .then((count: number) => count > 0);
  }

  deleteProduct(id: string): Promise<boolean> {
    return this.ProductModel.findByIdAndDelete(id)
      .count()
      .then((count: number) => count > 0);
  }
}

export { MGSProduct };
