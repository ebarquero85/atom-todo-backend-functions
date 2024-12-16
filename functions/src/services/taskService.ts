import { db } from "../firebase";
import { TaskInterface } from "../interfaces/tasksInterfaces";

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

export const getTaskService = async (userId: string) => {
  const userRef = db
    .collection("tasks")
    .where("userId", "==", userId)
    .where("deleted", "==", false);

  const snapshot = await userRef.get();

  if (!snapshot.empty) {
    const tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
    }));
    return tasks as TaskInterface[];
  } else {
    return [];
  }
};
