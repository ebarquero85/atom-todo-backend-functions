import { https } from "firebase-functions";
import express, { Request, Response } from "express";
import { db } from "./firebase";

const app = express();

app.get("/hello", async (req: Request, res: Response) => {
  try {
    const querySnapshot = await db.collection("users").get();

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data();
      const email = docData.email;

      res.status(200).send(`<h1>Hello World ${email}</h1>`);
    } else {
      res.status(200).send("<h1>No hay datos</h1>");
    }
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    res.status(400).send("<h1>OCURRIO UN ERROR AL OBTENER LA DATA</h1>");
  }
});

exports.api = https.onRequest(app);
