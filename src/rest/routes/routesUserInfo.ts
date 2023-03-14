import { Router } from "express";
import { ctrlUserInfo as userInfo } from "../controller";

const router = Router();

router.get("/:id", userInfo.getUser);
router.get("/all", userInfo.getUserAll);
router.post("/", userInfo.postUser);
router.put("/", userInfo.updateUser);
router.delete("/:id", userInfo.deleteUser);

export default router;
