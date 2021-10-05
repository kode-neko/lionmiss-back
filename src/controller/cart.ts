import { Request, Response } from "express";
import { CartModel } from "../model";

function getCart(req: Request, res: Response): void {
  const { id } = req.body;
  CartModel.findById(id)
    .then((cart) =>
      cart
        ? res.status(200).json(cart)
        : res.status(404).json({ error: "Not found" })
    )
    .catch((err) => res.status(500).json(err));
}

function putCartProduct(req: Request, res: Response): void {
  const { cartProduct, idCart } = req.body;
  let newCartProducts = [];
  CartModel.findById(idCart)
    .then((cart) => {
      newCartProducts = cart.products.filter((product) =>
        product._id === cartProduct._id ? cartProduct : product
      );
      const newCart = { ...cart, products: newCartProducts };
      CartModel.updateOne({ _id: idCart }, { $set: newCart });
    })
    .then(() => res.status(200).json(newCartProducts))
    .catch((err) => res.status(500).json(err));
}

function delCart(req: Request, res: Response): void {
  const { idCart } = req.body;
  CartModel.deleteOne({ _id: idCart })
    .then(({ ok, count }) =>
      count > 0 ? res.status(200).json(cart) : res.status(404).json()
    )
    .catch((err) => res.status(500).json(err));
}

export { getCart, putCartProduct, delCart };
