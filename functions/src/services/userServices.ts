import { db } from "../firebase";

export const getUserByEmailService = async (email: string) => {
  const userRef = db.collection("users").where("email", "==", email);
  const snapshot = await userRef.get();

  if (snapshot.empty) {
    return null;
  }

  const data = snapshot.docs[0].data();

  return {
    email: data.email,
    createdAt: data.createdAt.toDate(),
  };
};

export const createUserService = async (email: string) => {
  const newUserRef = db.collection("users").doc();
  const user = { id: newUserRef.id, email, createdAt: new Date() };
  await newUserRef.set(user);
  return user;
};
