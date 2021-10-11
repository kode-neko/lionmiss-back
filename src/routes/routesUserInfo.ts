import { Router } from "express";
import { ctrlUserInfo as userInfo } from "../controller";

const router = Router();

router.get("/:id", userInfo.getUserInfo);
router.get("/all", userInfo.getUserInfoAll);
router.post("/", userInfo.postUserInfo);
router.put("/", userInfo.updateUserInfo);
router.delete("/:id", userInfo.deleteUserInfo);

export default router;
