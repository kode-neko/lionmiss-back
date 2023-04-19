import {Router} from "express";
import {ctrlUser as user} from "../controller/index";

const router: Router = Router();

router.get("/:id", user.getUser);
router.get("/all", user.getUserAll);
router.put("/", user.updateUser);
router.delete("/:id", user.deleteUser);

// Login
router.post("/signup", user.signUp);
router.post("/login", user.login);

export default router;
