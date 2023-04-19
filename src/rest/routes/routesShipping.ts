import {Router} from "express";
import {ctrlShipping as shipping} from "../controller/index";

const router = Router();

router.get("/:id", shipping.getShipping);
router.get("/all", shipping.getShippingAll);
router.post("/", shipping.postShipping);
router.put("/", shipping.updateShipping);
router.delete("/:id", shipping.deleteShipping);

export default router;
