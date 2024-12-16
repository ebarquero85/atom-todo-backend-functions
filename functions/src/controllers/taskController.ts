import { Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  getTaskService,
  updateTaskService,
} from "../services/taskService";
import { TaskInterface } from "../interfaces/tasksInterfaces";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { userId, title, description } = req.body;

    if (!userId || !title || !description) {
      return res.status(400).json({
        error: true,
        message: `Please add userId, title task on json`,
      });
    }

    const doc = await createTaskService(userId, title, description);

    return res.status(201).json(doc);
  } catch (error) {
    return res.status(500).json({ error: true, message: "Error" });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    // const { userId } = req.body;
    const { userId } = req.params;
    const docs: TaskInterface[] = await getTaskService(userId);

    if (docs.length) {
      return res.status(200).json(docs);
    }

    return res.status(200).json([]);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: true, message: "Error" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const deleted: boolean = await deleteTaskService(taskId);

    return res.status(200).json({ deleted });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: true, message: "Error" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const { title, description, completed } = req.body;

    const updated: boolean = await updateTaskService(
      taskId,
      title,
      description,
      completed
    );

    return res.status(200).json({ updated });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: true, message: "Error" });
  }
};
