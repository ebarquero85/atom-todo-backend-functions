import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

initializeApp({
  credential: applicationDefault(), // GOOGLE_APPLICATION_CREDENTIALS
});

const db = getFirestore();

export { db };
