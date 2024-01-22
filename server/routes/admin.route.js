import express from "express";
import { deleteUser, getUsers } from "../controllers/admin.controller.js";
import { verifyAdmin } from "../middleware/verify.js";
const router = express.Router();

router.get("/", verifyAdmin, getUsers);
router.delete("/:id", verifyAdmin, deleteUser);

export default router;
