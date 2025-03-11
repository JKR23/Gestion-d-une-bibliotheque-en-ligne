import express from "express";
const router = express.Router();
import {
 getBooks,
 getBookById,
 searchBooks,
 updateBook,
 deleteBook,
 addBook,
} from "../controllers/bookController.js"; // Assurez-vous d'importer les bons contrôleurs
import { authenticateToken, isAdmin } from "../middleware/authMiddleware.js"; // Import des middlewares pour vérification d'authentification et d'administration

// Route pour obtenir tous les livres
router.get("/", getBooks);
// URL : GET http://localhost:5000/api/books

// Route pour rechercher des livres par titre
router.get("/search", searchBooks);
// URL : GET http://localhost:5000/api/books/search

// Route pour obtenir un livre par son ID
router.get("/id/:id", getBookById);
// URL : GET http://localhost:5000/api/books/id/:id (Remplacez :id par l'ID du livre)

// Route pour ajouter un nouveau livre (accessibilité admin uniquement)
router.post("/", addBook); //router.post("/", authenticateToken, isAdmin, addBook);
// URL : POST http://localhost:5000/api/books (Réservée aux administrateurs)

// Route pour mettre à jour un livre par son ID (accessibilité admin uniquement)
router.put("/id/:id", updateBook); //router.put("/id/:id", authenticateToken, isAdmin, updateBook);
// URL : PUT http://localhost:5000/api/books/id/:id (Réservée aux administrateurs)

// Route pour supprimer un livre par son ID (accessibilité admin uniquement)
router.delete("/id/:id", deleteBook); //router.delete("/id/:id", authenticateToken, isAdmin, deleteBook);
// URL : DELETE http://localhost:5000/api/books/id/:id (Réservée aux administrateurs)

export default router; // Exportation des routes par défaut
