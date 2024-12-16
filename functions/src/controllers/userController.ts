import { Request, Response } from "express";
import { UserInterface } from "../interfaces/usersInterfaces";
import {
  createUserService,
  getUserByEmailService,
} from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: true, message: `Please add a email on json` });
    }

    const data = await createUserService(email);

    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ error: true, message: "Error" });
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const doc: UserInterface | null = await getUserByEmailService(email);

    if (doc !== null) {
      let userData = doc as UserInterface;
      return res.status(200).json(userData);
    }

    return res.status(200).json({ email: null, createdAt: null });
  } catch (error: unknown) {
    console.log(error);
    return res.status(500).json({ error: true, message: "Error" });
  }
};
