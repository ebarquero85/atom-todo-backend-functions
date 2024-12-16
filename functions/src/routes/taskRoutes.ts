import { Router } from "express";
import { createTask, getTask } from "../controllers/taskController";

const router = Router();

router.post("/", createTask);

router.get("/", getTask);

export default router;
