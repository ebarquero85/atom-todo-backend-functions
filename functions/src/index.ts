import { https } from 'firebase-functions';
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

const app = express();

// console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

app.get('/hello', async (req: Request, res: Response) => {
  try {
    const querySnapshot = await db.collection('users').get();

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data();
      const email = docData.email;

      res.status(200).send(`<h1>Hello World ${email}</h1>`);
    } else {
      res.status(200).send('<h1>No hay datos</h1>');
    }
  } catch (error) {
    console.error('Error al obtener documentos:', error);
    res.status(400).send('<h1>OCURRIO UN ERROR AL OBTENER LA DATA</h1>');
  }
});

exports.api = https.onRequest(app);
