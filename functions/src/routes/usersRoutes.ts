import { Router } from "express";
import { createUser, getUserByEmail } from "../controllers/userController";

const router = Router();

router.post("/", createUser);

router.get("/:email", getUserByEmail);

export default router;
