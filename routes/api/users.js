import express from "express";

import auth from "#middlewares/authorization.js";
import { signUp } from "#controllers/users/auth.signupUser.js";
import { logIn } from "#controllers/users/auth.loginUser.js";
import { logOut } from "#controllers/users/auth.logoutUser.js";
import { currentUser } from "#controllers/users/auth.currentUser.js";
import { updateUserAvatar } from "#controllers/users/updateUserAvatar.js";
import { upload } from "../../multerConfig/multerConfig.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/logout", auth, logOut);
router.get("/current", auth, currentUser);
router.patch("/avatars", auth, upload.single("avatar"), updateUserAvatar);

export default router;
