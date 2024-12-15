import { https } from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import express, { Request, Response } from "express";

// Inicializar Firebase Admin
initializeApp();

// Crear una instancia de Express
const app = express();

app.get("/hello", (req: Request, res: Response) => {
  res.status(200).send("<h1>Hello World desde Firebase Functions!</h1>");
});

exports.api = https.onRequest(app);
