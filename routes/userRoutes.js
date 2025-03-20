//userRoutes.jsx

import express from "express"; // Import de la bibliothèque Express avec la syntaxe ES6
import {
 registerUser,
 loginUser,
 getUserByEmail,
 getAllUsers,
 getUserById,
 updateUser,
 deleteUser,
 changeUserAddress, // Ajout de l'import pour changer l'adresse
} from "../controllers/userController.js"; // Import des contrôleurs via la syntaxe ES6

const router = express.Router();

// Inscription d'un utilisateur
router.post("/register", registerUser);
// URL : POST http://localhost:5000/api/users/register

// Connexion d'un utilisateur
router.post("/login", loginUser);
// URL : POST http://localhost:5000/api/users/login

// Récupérer tous les utilisateurs
router.get("/", getAllUsers);
// URL : GET http://localhost:5000/api/users

// Récupérer un utilisateur par son ID
router.get("/:id", getUserById);
// URL : GET http://localhost:5000/api/users/:id (Remplacez :id par l'ID de l'utilisateur)

// Récupérer un utilisateur par son email
router.get("/email/:email", getUserByEmail);
// URL : GET http://localhost:5000/api/users/:email (Remplacez :email par l'email de l'utilisateur)

// Mettre à jour un utilisateur par son ID
router.put("/id/:id", updateUser);
// URL : PUT http://localhost:5000/api/users/id/:id (Remplacez :id par l'ID de l'utilisateur)

// Supprimer un utilisateur par son ID
router.delete("/id/:id", deleteUser);
// URL : DELETE http://localhost:5000/api/users/id/:id (Remplacez :id par l'ID de l'utilisateur)

// Changer l'adresse d'un utilisateur par son ID (nouvelle route)
router.put("/id/:userId/address", changeUserAddress);
// URL : PUT http://localhost:5000/api/users/id/:userId/address (Remplacez :userId par l'ID de l'utilisateur)

export default router; // Exportation du routeur avec la syntaxe ES6
