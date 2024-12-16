import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from "../controllers/taskController";

const router = Router();

router.post("/", createTask);

router.get("/:userId", getTask);

router.delete("/:taskId", deleteTask);

router.put("/:taskId", updateTask);

export default router;
