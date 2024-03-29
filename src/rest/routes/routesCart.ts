import {Router} from "express";
import {ctrlCart as cart} from "../controller/index";

const router: Router = Router();

router.get("/:idUser", cart.getCart);
router.post("/", cart.createCart);
router.put("/", cart.updateCart);
router.delete("/:idUser", cart.deleteCart);

router.post("/product", cart.postCartProduct);
router.put("/product", cart.putCartProduct);
router.delete("/:idUser/product/:idProduct", cart.delCartProduct);

export default router;
