// models/user.js
import { prisma } from "../prismaClient.js"; // Import nommé

// Créer un utilisateur avec une adresse
const createUser = async (
 firstName,
 lastName,
 username,
 password,
 email,
 role,
 addressData
) => {
 console.log(`Tentative de création d'un utilisateur avec email: ${email}`);

 const user = await prisma.user.create({
  data: {
   firstName,
   lastName,
   username,
   password,
   email,
   role,
   address: {
    create: addressData, // Crée l'adresse et l'associe à l'utilisateur
   },
  },
 });

 console.log(`Utilisateur créé avec succès: ${user.id}`);
 return user;
};

// Fonction pour récupérer tous les utilisateurs
const findAllUsers = async () => {
 console.log("Récupération de tous les utilisateurs");
 const users = await prisma.user.findMany(); // Utilisation de la méthode findMany pour obtenir tous les utilisateurs
 console.log(`Nombre d'utilisateurs récupérés: ${users.length}`);
 return users;
};

// Fonction pour trouver un utilisateur par son ID
const findUserById = async (id) => {
 console.log(`Recherche d'utilisateur avec ID: ${id}`);
 const user = await prisma.user.findUnique({
  where: { id: parseInt(id) }, // Assure-toi que l'ID est un entier
 });
 console.log(
  user ? `Utilisateur trouvé: ${user.id}` : "Utilisateur non trouvé"
 );
 return user;
};

// Fonction pour trouver un utilisateur par son email
const findUserByEmail = async (email) => {
 console.log(`Recherche d'utilisateur avec email: ${email}`);
 const user = await prisma.user.findUnique({
  where: { email },
 });
 console.log(
  user ? `Utilisateur trouvé: ${user.id}` : "Utilisateur non trouvé"
 );
 return user;
};

// Fonction pour vérifier le mot de passe
const checkPassword = async (email, password) => {
 console.log(`Vérification des identifiants pour l'email: ${email}`);
 const user = await findUserByEmail(email);
 if (user && user.password === password) {
  console.log(`Mot de passe valide pour l'email: ${email}`);
  return true;
 }
 console.log(`Mot de passe invalide pour l'email: ${email}`);
 return false;
};

// Fonction pour mettre à jour un utilisateur : models
const updateUser = async (id, data) => {
 console.log(`Tentative de mise à jour de l'utilisateur avec ID: ${id}`);

 // Si l'adresse est fournie, l'inclure dans les données de mise à jour
 const updatedUser = await prisma.user.update({
  where: { id: parseInt(id) },
  data: {
   firstName: data.firstName,
   lastName: data.lastName,
   password: data.password,
   email: data.email,
   role: data.role,
   // Mise à jour de l'adresse
   address: data.address
    ? {
       update: {
        street: data.address.street,
        city: data.address.city,
        state: data.address.state,
        postalCode: data.address.postalCode,
       },
      }
    : undefined,
  },
 });

 console.log(`Utilisateur mis à jour: ${updatedUser.id}`);
 return updatedUser;
};

// Fonction pour supprimer un utilisateur
const deleteUser = async (id) => {
 console.log(`Suppression de l'utilisateur avec ID: ${id}`);
 await prisma.user.delete({
  where: { id: parseInt(id) }, // Assure-toi que l'ID est un entier
 });
 console.log(`Utilisateur supprimé avec succès: ${id}`);
};

// Associer un utilisateur à une nouvelle adresse (remplacer l'adresse actuelle)
const changeUserAddress = async (userId, newAddressData) => {
 console.log(`Changement d'adresse pour l'utilisateur avec ID: ${userId}`);
 const newAddress = await prisma.address.create({
  data: newAddressData, // Créer une nouvelle adresse
 });

 const updatedUser = await prisma.user.update({
  where: { id: userId },
  data: {
   addressId: newAddress.id, // Associer la nouvelle adresse à l'utilisateur
  },
 });

 console.log(`Adresse de l'utilisateur mise à jour: ${updatedUser.id}`);
 return updatedUser;
};

export default {
 createUser,
 findAllUsers,
 findUserById,
 findUserByEmail,
 checkPassword,
 updateUser,
 deleteUser,
 changeUserAddress,
};
