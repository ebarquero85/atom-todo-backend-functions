import { Router } from "express";
import { createTask, deleteTask, getTask } from "../controllers/taskController";

const router = Router();

router.post("/", createTask);

router.get("/", getTask);

router.delete("/:taskId", deleteTask);

export default router;
