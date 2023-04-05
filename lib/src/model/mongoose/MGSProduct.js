import { model } from "mongoose";
import { schemaProduct } from "./schemas/index.js";
class MGSProduct {
    ProductModel = model("Product", schemaProduct, "product");
    getProduct(id) {
        return this.ProductModel.findById(id)
            .then(product => product)
            .catch(err => err);
    }
    getProductAll() {
        return this.ProductModel.find({})
            .then(list => list)
            .catch(err => err);
    }
    postProduct(product) {
        const productModel = new this.ProductModel(product);
        return productModel
            .validate()
            .then(() => productModel.save())
            .then(product => product)
            .catch(err => err);
    }
    updateProduct(product) {
        return this.ProductModel.findByIdAndUpdate(product._id, product, {
            runValidators: true,
        })
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
    deleteProduct(id) {
        return this.ProductModel.findByIdAndDelete(id)
            .count()
            .then(count => count > 0)
            .catch(err => err);
    }
}
export { MGSProduct };
//# sourceMappingURL=MGSProduct.js.map