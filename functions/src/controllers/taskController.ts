import { Request, Response } from "express";
import { createTaskService, deleteTaskService, getTaskService } from "../services/taskService";
import { TaskInterface } from "../interfaces/tasksInterfaces";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { userId, task } = req.body;

    if (!userId || !task) {
      return res
        .status(400)
        .json({ error: true, message: `Please add userId and task on json` });
    }

    const data = await createTaskService(userId, task);

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: true, message: "Error" });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const docs: TaskInterface[] = await getTaskService(userId);

    if (docs.length) {
      return res.status(200).json(docs);
    }

    return res.status(200).json([]);
  } catch (error: unknown) {
    console.log(error);
    return res.status(500).json({ error: true, message: "Error" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    await deleteTaskService(taskId);

    return res.status(200).json({ deleted: true });
  } catch (error: unknown) {
    console.log(error);
    return res.status(500).json({ error: true, message: "Error" });
  }
};
