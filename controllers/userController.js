// controllers/userController.js
import userModel from "../models/user.js"; // Utilisation de l'import ES6
//import jwt from "jsonwebtoken"; // Importation de jsonwebtoken pour générer un token

// Inscription d'un utilisateur avec une adresse
export const registerUser = async (req, res) => {
 try {
  console.log("Début de l'inscription de l'utilisateur");

  const { firstName, lastName, username, password, email, role, address } =
   req.body;

  // L'adresse est incluse dans l'objet `address` dans le corps de la requête
  const user = await userModel.createUser(
   firstName,
   lastName,
   username,
   password,
   email,
   role,
   address
  );

  console.log(`Utilisateur ${user.username} créé avec succès`);
  res.status(201).json(user);
 } catch (error) {
  console.error("Erreur lors de l'inscription:", error);
  res.status(500).json({ error: "Erreur lors de l'inscription" });
 }
};

// Changer l'adresse d'un utilisateur (associer une nouvelle adresse)
export const changeUserAddress = async (req, res) => {
 try {
  console.log("Changement d'adresse de l'utilisateur");

  const { userId } = req.params; // L'ID de l'utilisateur dans l'URL
  const { street, city, state, postalCode } = req.body; // Nouvelles données de l'adresse

  // Changer l'adresse de l'utilisateur
  const updatedUser = await userModel.changeUserAddress(userId, {
   street,
   city,
   state,
   postalCode,
  });

  console.log(`Adresse de l'utilisateur ${userId} mise à jour avec succès`);
  res.status(200).json(updatedUser);
 } catch (error) {
  console.error("Erreur lors du changement d'adresse:", error);
  res.status(500).json({ error: "Erreur lors du changement d'adresse" });
 }
};

// Connexion d'un utilisateur : controller
export const loginUser = async (req, res) => {
 try {
  const { email, password } = req.body;
  console.log(`Tentative de connexion pour l'utilisateur avec email: ${email}`);

  // Vérification des identifiants de l'utilisateur
  const isValid = await userModel.checkPassword(email, password);
  if (!isValid) {
   console.log(`Identifiants invalides pour l'email: ${email}`);
   return res.status(401).json({ error: "Identifiants invalides" });
  }

  // Récupération de l'utilisateur
  const user = await userModel.findUserByEmail(email);

  console.log(`Utilisateur connecté avec succès: ${user.username}`);

  // Ici, nous renvoyons les données utilisateur, dont l'ID
  return res.status(200).json({
   message: "Connexion réussie",
   userId: user.id, // Retourne l'ID de l'utilisateur dans la réponse
  });
 } catch (error) {
  console.error("Erreur lors de la connexion:", error);
  res.status(500).json({ error: "Erreur lors de la connexion" });
 }
};

// Récupérer un utilisateur par son ID
export const getUserById = async (req, res) => {
 try {
  const { id } = req.params; // Récupérer l'ID de l'URL
  console.log(`Tentative de récupération de l'utilisateur avec ID: ${id}`);

  const user = await userModel.findUserById(id); // Utiliser la méthode findUserById du modèle

  if (!user) {
   console.log(`Utilisateur avec ID ${id} non trouvé`);
   return res.status(404).json({ error: "Utilisateur non trouvé" });
  }

  res.status(200).json(user);
 } catch (error) {
  console.error("Erreur lors de la récupération de l'utilisateur:", error);
  res
   .status(500)
   .json({ error: "Erreur lors de la récupération de l'utilisateur" });
 }
};

// Récupérer un utilisateur par son email : controller
export const getUserByEmail = async (req, res) => {
 try {
  const email = req.params.email;
  console.log(
   `Tentative de récupération de l'utilisateur avec email: ${email}`
  );

  const user = await userModel.findUserByEmail(email);

  if (!user) {
   console.log(`Utilisateur avec email ${email} non trouvé`);
   return res.status(404).json({ error: "Utilisateur non trouvé" });
  }

  res.status(200).json(user);
 } catch (error) {
  console.error("Erreur lors de la récupération de l'utilisateur:", error);
  res
   .status(500)
   .json({ error: "Erreur lors de la récupération de l'utilisateur" });
 }
};

// Récupérer tous les utilisateurs
export const getAllUsers = async (req, res) => {
 try {
  console.log("Tentative de récupération de tous les utilisateurs");
  const users = await userModel.findAllUsers();
  if (!users || users.length === 0) {
   console.log("Aucun utilisateur trouvé");
   return res.status(404).json({ error: "Aucun utilisateur trouvé" });
  }
  res.status(200).json(users);
 } catch (error) {
  console.error("Erreur lors de la récupération des utilisateurs:", error);
  res.status(500).json({
   error: "Erreur lors de la récupération des utilisateurs",
   details: error.message,
  });
 }
};

// Mettre à jour un utilisateur par son ID : controller
// Mettre à jour un utilisateur par son ID : controller
export const updateUser = async (req, res) => {
 try {
  const { id } = req.params; // Récupérer l'ID de l'URL
  console.log(`Tentative de mise à jour de l'utilisateur avec ID: ${id}`);

  const { firstName, lastName, password, email, role, address } = req.body; // Récupérer les nouvelles données de l'utilisateur

  // Vérifier si l'utilisateur existe
  const user = await userModel.findUserById(id);
  if (!user) {
   console.log(`Utilisateur avec ID ${id} non trouvé`);
   return res.status(404).json({ error: "Utilisateur non trouvé" });
  }

  // Mettre à jour l'utilisateur et l'adresse
  const updatedUser = await userModel.updateUser(id, {
   firstName,
   lastName,
   password,
   email,
   role,
   address: address
    ? {
       update: address, // Mettre à jour l'adresse si elle est fournie
      }
    : undefined,
  });

  console.log(`Utilisateur ${updatedUser.id} mis à jour`);
  res.status(200).json(updatedUser);
 } catch (error) {
  console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
  res
   .status(500)
   .json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
 }
};

// Supprimer un utilisateur par son ID
export const deleteUser = async (req, res) => {
 try {
  const { id } = req.params; // Récupérer l'ID de l'URL
  console.log(`Tentative de suppression de l'utilisateur avec ID: ${id}`);

  const user = await userModel.findUserById(id);
  if (!user) {
   console.log(`Utilisateur avec ID ${id} non trouvé`);
   return res.status(404).json({ error: "Utilisateur non trouvé" });
  }

  await userModel.deleteUser(id);
  console.log(`Utilisateur ${id} supprimé`);
  res.status(200).json({ message: "Utilisateur supprimé avec succès" });
 } catch (error) {
  console.error("Erreur lors de la suppression de l'utilisateur:", error);
  res
   .status(500)
   .json({ error: "Erreur lors de la suppression de l'utilisateur" });
 }
};
