//models/book.js
const prisma = require("../prismaClient"); // Import du client Prisma

//model
// Fonction pour ajouter un livre
const addBook = async (
 title,
 author,
 isbn,
 description,
 genre,
 isAvailable,
 stock
) => {
 const book = await prisma.book.create({
  data: {
   title,
   author,
   isbn,
   description,
   genre, // Ajouter genre ici
   isAvailable, // Ajouter isAvailable ici
   stock,
  },
 });
 return book;
};

// Fonction pour rechercher un livre par son titre
const findBookByTitle = async (title) => {
 const book = await prisma.book.findMany({
  where: { title: { contains: title, mode: "insensitive" } },
 });
 return book;
};

// Fonction pour modifier un livre par ID
const updateBook = async (
 id,
 title,
 author,
 isbn,
 description,
 genre,
 isAvailable,
 stock
) => {
 const updatedBook = await prisma.book.update({
  where: { id: parseInt(id) },
  data: {
   title,
   author,
   isbn,
   description,
   genre, // Ajouter genre dans la mise à jour
   isAvailable, // Ajouter isAvailable dans la mise à jour
   stock, // Met à jour stock
  },
 });
 return updatedBook;
};

// Fonction pour supprimer un livre par ID
const deleteBook = async (id) => {
 await prisma.book.delete({
  where: { id: parseInt(id) }, // Recherche par ID pour supprimer le livre
 });
 return { message: "Livre supprimé avec succès" };
};

module.exports = {
 addBook,
 findBookByTitle,
 updateBook,
 deleteBook,
};
