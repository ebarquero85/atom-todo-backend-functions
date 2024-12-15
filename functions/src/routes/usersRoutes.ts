import { Router } from "express";
import { createUser, getUserByEmail } from "../controllers/userControllers";

const router = Router();

// Ruta para crear un usuario
router.post("/", createUser);

// Ruta para obtener un usuario
router.get("/:email", getUserByEmail);

export default router;
