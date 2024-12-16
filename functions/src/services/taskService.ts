import { db } from "../firebase";
import { TaskInterface } from "../interfaces/tasksInterfaces";

export const createTaskService = async (
  userId: string,
  title: string,
  description: string
) => {
  const newTaskRef = db.collection("tasks").doc();

  const newTask = {
    id: newTaskRef.id,
    userId,
    title,
    description,
    completed: false,
    deleted: false,
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

export const deleteTaskService = async (taskId: string) => {
  const snapshot = await db.collection("tasks").where("id", "==", taskId).get();

  if (snapshot.empty) {
    return false;
  }

  const doc = snapshot.docs[0];

  await db.collection("tasks").doc(doc.id).update({
    deleted: true,
  });

  return true;
};

export const updateTaskService = async (
  id: string,
  title: string,
  description: string,
  completed: boolean
) => {
  const snapshot = await db.collection("tasks").where("id", "==", id).get();

  if (snapshot.empty) {
    return false;
  }

  const doc = snapshot.docs[0];

  await db.collection("tasks").doc(doc.id).update({
    title,
    description,
    completed,
  });

  return true;
};
