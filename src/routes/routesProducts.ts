import { Router } from "express";
import { ctrlProduct as product } from "../controller";

const router = Router();

router.get("/:id", product.getProduct);
router.get("/all", product.getProductAll);
router.post("/", product.postProduct);
router.put("/", product.updateProduct);
router.delete("/:id", product.deleteProduct);

export default router;
