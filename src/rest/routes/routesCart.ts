import { Router } from "express";
import { ctrlCart as cart } from "../controller";

const router = Router();

router.get("/:idUser", cart.getCart);
router.post("/", cart.postCartProduct);
router.put("/", cart.putCartProduct);
router.delete("/:idUser", cart.delCartProduct);

router.post("/product", cart.postCartProduct);
router.put("/product", cart.putCartProduct);
router.delete("/:idUser/product/:idProduct", cart.delCartProduct);

export default router;