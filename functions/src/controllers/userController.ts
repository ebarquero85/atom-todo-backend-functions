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

    const doc = await createUserService(email);

    return res.status(201).json(doc);
  } catch (error) {
    return res.status(500).json({ error: true, message: "Error" });
  }
};

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const doc: UserInterface | null = await getUserByEmailService(email);

    if (doc !== null) {
      return res.status(200).json(doc);
    }

    return res.status(200).json(doc);
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ error: true, message: "Error" });
  }
};
