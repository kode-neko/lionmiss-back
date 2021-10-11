import { Router } from "express";
import { ctrlCart as cart } from "../controller";

const router = Router();

router.get("/user/:idUser", cart.getCart);
router.post("/product", cart.postCartProduct);
router.put("/product", cart.putCartProduct);
router.delete("/user/:idUser/product/:idProduct", cart.delCartProduct);

export default router;
