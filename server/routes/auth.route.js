import express from "express"
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin", signIn)
router.post("/signup", signUp)
router.delete("/signout", signOut)

export default router