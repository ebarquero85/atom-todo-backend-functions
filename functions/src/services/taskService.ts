import { db } from "../firebase";

export const createTaskService = async (userId: string, task: string) => {
  const newTaskRef = db.collection("tasks").doc();
  const newTask = {
    id: newTaskRef.id,
    userId,
    task,
    completed: false,
    createdAt: new Date(),
  };
  await newTaskRef.set(newTask);
  return newTask;
};
