import "dotenv/config";
import express, { json } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import cspOption from "./csp-options.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";

import next from "next";

// Vérifier si on est en mode dev ou prod
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
 const app = express();

 // Middlewares
 app.use(helmet(cspOption));
 app.use(compression());
 app.use(cors());
 app.use(json());

 // Gérer les fichiers statiques de Next.js
 app.use(express.static(".next/static"));

 // API Routes
 app.use("/api/books", bookRoutes);
 app.use("/api/users", userRoutes);
 app.use("/api/reservations", reservationRoutes);

 // Toutes les autres requêtes sont gérées par Next.js
 app.all("*", (req, res) => {
  return handle(req, res);
 });

 // Gestion des erreurs 404
 app.use((request, response) => {
  response
   .status(404)
   .json({ error: `${request.originalUrl} Route introuvable.` });
 });

 const PORT = process.env.PORT || 5000;
 // Démarre le serveur
 app.listen(PORT, () => {
  console.info("✅ Serveur démarré :");
  console.info(`🌍 http://localhost:${PORT}`);
 });
});
