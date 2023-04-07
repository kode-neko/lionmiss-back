import { Router } from "express";
import { ctrlUser as user } from "../controller/index.js";

const router = Router();

router.get("/:id", user.getUser);
router.get("/all", user.getUserAll);
router.post("/", user.postUser);
router.put("/", user.updateUser);
router.delete("/:id", user.deleteUser);

export default router;
