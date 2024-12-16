import { Request, Response } from "express";
import { createTaskService } from "../services/taskService";

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
