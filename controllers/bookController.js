//controllers/bookControllers.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Fonction pour obtenir tous les livres
export const getBooks = async (req, res) => {
 try {
  const books = await prisma.book.findMany();
  if (!books || books.length === 0) {
   return res.status(404).json({ error: "Aucun livre trouvé" });
  }
  res.status(200).json(books); // Renvoie les livres
 } catch (error) {
  res.status(500).json({
   message: "Erreur lors de la récupération des livres.",
   details: error.message,
  });
 }
};

// Fonction pour obtenir un livre par ID
export const getBookById = async (req, res) => {
 try {
  const { id } = req.params;
  const book = await prisma.book.findUnique({
   where: { id: parseInt(id) },
  });

  if (!book) {
   return res.status(404).json({ error: "Livre non trouvé" });
  }

  res.status(200).json(book);
 } catch (error) {
  res.status(500).json({
   message: "Erreur lors de la récupération du livre.",
   details: error.message,
  });
 }
};

//controller
// Fonction pour ajouter un livre
export const addBook = async (req, res) => {
 const { title, author, description, stock, genre, isAvailable } = req.body; // Ajouter genre et isAvailable
 try {
  const newBook = await prisma.book.create({
   data: {
    title,
    author,
    description,
    stock,
    genre, // Ajouter genre ici
    isAvailable, // Ajouter isAvailable ici
   },
  });
  res.status(201).json(newBook);
 } catch (error) {
  res.status(500).json({
   message: "Erreur lors de l'ajout du livre.",
   details: error.message,
  });
 }
};

// Fonction pour rechercher un livre via title
export const searchBooks = async (req, res) => {
 const { title } = req.query; // Utiliser req.query pour récupérer le paramètre
 try {
  if (!title) {
   return res
    .status(400)
    .json({ error: "Le paramètre 'title' est requis pour la recherche." });
  }

  const books = await prisma.book.findMany({
   where: {
    title: {
     contains: title.toLowerCase(), // Recherche insensible à la casse
     // Si nécessaire, tu peux utiliser `startsWith`, `endsWith` etc. selon les besoins
    },
   },
  });

  if (!books || books.length === 0) {
   return res.status(404).json({ error: "Aucun livre trouvé avec ce titre." });
  }

  res.status(200).json(books);
 } catch (error) {
  res.status(500).json({
   message: "Erreur lors de la recherche de livres.",
   details: error.message,
  });
 }
};

// Fonction pour modifier un livre par ID
export const updateBook = async (req, res) => {
 const { id } = req.query;
 const { title, author, description, stock, genre, isAvailable } = req.body; // Ajouter genre et isAvailable
 try {
  const book = await prisma.book.findUnique({
   where: { id: parseInt(id) },
  });

  if (!book) {
   return res.status(404).json({ error: "Livre non trouvé" });
  }

  const updatedBook = await prisma.book.update({
   where: { id: parseInt(id) },
   data: { title, author, description, stock, genre, isAvailable }, // Ajouter genre et isAvailable dans la mise à jour
  });

  res.status(200).json(updatedBook);
 } catch (error) {
  res.status(500).json({
   message: "Erreur lors de la mise à jour du livre.",
   details: error.message,
  });
 }
};

// Fonction pour supprimer un livre par ID
export const deleteBook = async (req, res) => {
 const { id } = req.requery;

 try {
  const book = await prisma.book.findUnique({
   where: { id: parseInt(id) },
  });

  if (!book) {
   return res.status(404).json({ error: "Livre non trouvé" });
  }

  await prisma.book.delete({
   where: { id: parseInt(id) },
  });

  res.status(200).json({ message: "Livre supprimé avec succès." });
 } catch (error) {
  res.status(500).json({
   message: "Erreur lors de la suppression du livre.",
   details: error.message,
  });
 }
};
