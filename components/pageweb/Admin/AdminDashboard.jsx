"use client";
import { useState, useEffect } from "react";
import AddBookForm from "./AddBookForm";
import AddUserForm from "./AddUserForm";

const AdminDashboard = () => {
 const [activeSection, setActiveSection] = useState(null);
 const [books, setBooks] = useState([]);
 const [users, setUsers] = useState([]);
 const [editBook, setEditBook] = useState(null);
 const [editUser, setEditUser] = useState(null);

 const fetchBooks = async () => {
  try {
   const res = await fetch("http://localhost:5000/api/books");
   const data = await res.json();
   setBooks(data);
  } catch (err) {
   console.error("Erreur récupération livres:", err);
  }
 };

 const fetchUsers = async () => {
  try {
   const res = await fetch("http://localhost:5000/api/users");
   const data = await res.json();
   setUsers(data);
  } catch (err) {
   console.error("Erreur récupération utilisateurs:", err);
  }
 };

 const deleteBook = async (id) => {
  if (confirm("Supprimer ce livre ?")) {
   await fetch(`http://localhost:5000/api/books/id/${id}`, {
    method: "DELETE",
   });
   fetchBooks();
  }
 };

 const deleteUser = async (id) => {
  if (confirm("Supprimer cet utilisateur ?")) {
   await fetch(`http://localhost:5000/api/users/id/${id}`, {
    method: "DELETE",
   });
   fetchUsers();
  }
 };

 const updateBook = async (book) => {
  await fetch(`http://localhost:5000/api/books/id/${book._id}`, {
   method: "PUT",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(book),
  });
  setEditBook(null);
  fetchBooks();
 };

 const updateUser = async (user) => {
  await fetch(`http://localhost:5000/api/users/id/${user._id}`, {
   method: "PUT",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(user),
  });
  setEditUser(null);
  http: fetchUsers();
 };

 useEffect(() => {
  if (activeSection === "manageBooks") fetchBooks();
  if (activeSection === "manageUsers") fetchUsers();
 }, [activeSection]);

 const handleBack = () => {
  setActiveSection(null);
  setEditBook(null);
  setEditUser(null);
 };

 return (
  <div className="p-6">
   <h2 className="text-2xl font-bold mb-6">Espace Administrateur</h2>

   {activeSection === null && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     <Card
      title="Ajouter un Livre"
      onClick={() => setActiveSection("addBook")}
     />
     <Card
      title="Ajouter un Utilisateur"
      onClick={() => setActiveSection("addUser")}
     />
     <Card
      title="Gérer les Livres"
      onClick={() => setActiveSection("manageBooks")}
     />
     <Card
      title="Gérer les Utilisateurs"
      onClick={() => setActiveSection("manageUsers")}
     />
    </div>
   )}

   {activeSection === "addBook" && (
    <Section title="Ajout d’un Livre" onBack={handleBack}>
     <AddBookForm />
    </Section>
   )}

   {activeSection === "addUser" && (
    <Section title="Ajout d’un Utilisateur" onBack={handleBack}>
     <AddUserForm />
    </Section>
   )}

   {activeSection === "manageBooks" && (
    <Section title="Gestion des Livres" onBack={handleBack}>
     <table className="w-full border">
      <thead>
       <tr className="bg-gray-100">
        <th className="border p-2">Titre</th>
        <th className="border p-2">Auteur</th>
        <th className="border p-2">Actions</th>
       </tr>
      </thead>
      <tbody>
       {books.map((book) => (
        <tr key={book._id}>
         <td className="border p-2">{book.title}</td>
         <td className="border p-2">{book.author}</td>
         <td className="border p-2 space-x-2">
          <button
           onClick={() => setEditBook(book)}
           className="bg-yellow-500 text-white px-2 py-1 rounded"
          >
           Modifier
          </button>
          <button
           onClick={() => deleteBook(book._id)}
           className="bg-red-500 text-white px-2 py-1 rounded"
          >
           Supprimer
          </button>
         </td>
        </tr>
       ))}
      </tbody>
     </table>

     {editBook && (
      <div className="mt-6 p-4 border bg-gray-50">
       <h4 className="font-bold mb-2">Modifier le Livre</h4>
       <form
        onSubmit={(e) => {
         e.preventDefault();
         updateBook(editBook);
        }}
       >
        <input
         value={editBook.title}
         onChange={(e) =>
          setEditBook({
           ...editBook,
           title: e.target.value,
          })
         }
         className="border p-2 mb-2 w-full"
        />
        <input
         value={editBook.author}
         onChange={(e) =>
          setEditBook({
           ...editBook,
           author: e.target.value,
          })
         }
         className="border p-2 mb-2 w-full"
        />
        <button
         type="submit"
         className="bg-blue-600 text-white px-4 py-2 rounded"
        >
         Enregistrer
        </button>
       </form>
      </div>
     )}
    </Section>
   )}

   {activeSection === "manageUsers" && (
    <Section title="Gestion des Utilisateurs" onBack={handleBack}>
     <table className="w-full border">
      <thead>
       <tr className="bg-gray-100">
        <th className="border p-2">Nom</th>
        <th className="border p-2">Email</th>
        <th className="border p-2">Rôle</th>
        <th className="border p-2">Actions</th>
       </tr>
      </thead>
      <tbody>
       {users.map((user) => (
        <tr key={user._id}>
         <td className="border p-2">
          {user.firstName} {user.lastName}
         </td>
         <td className="border p-2">{user.email}</td>
         <td className="border p-2">{user.role}</td>
         <td className="border p-2 space-x-2">
          <button
           onClick={() => setEditUser(user)}
           className="bg-yellow-500 text-white px-2 py-1 rounded"
          >
           Modifier
          </button>
          <button
           onClick={() => deleteUser(user._id)}
           className="bg-red-500 text-white px-2 py-1 rounded"
          >
           Supprimer
          </button>
         </td>
        </tr>
       ))}
      </tbody>
     </table>

     {editUser && (
      <div className="mt-6 p-4 border bg-gray-50">
       <h4 className="font-bold mb-2">Modifier l’Utilisateur</h4>
       <form
        onSubmit={(e) => {
         e.preventDefault();
         updateUser(editUser);
        }}
       >
        <input
         value={editUser.firstName}
         onChange={(e) =>
          setEditUser({
           ...editUser,
           firstName: e.target.value,
          })
         }
         className="border p-2 mb-2 w-full"
        />
        <input
         value={editUser.lastName}
         onChange={(e) =>
          setEditUser({
           ...editUser,
           lastName: e.target.value,
          })
         }
         className="border p-2 mb-2 w-full"
        />
        <input
         value={editUser.email}
         onChange={(e) =>
          setEditUser({
           ...editUser,
           email: e.target.value,
          })
         }
         className="border p-2 mb-2 w-full"
        />
        <input
         value={editUser.role}
         onChange={(e) =>
          setEditUser({
           ...editUser,
           role: e.target.value,
          })
         }
         className="border p-2 mb-2 w-full"
        />
        <button
         type="submit"
         className="bg-blue-600 text-white px-4 py-2 rounded"
        >
         Enregistrer
        </button>
       </form>
      </div>
     )}
    </Section>
   )}
  </div>
 );
};

const Card = ({ title, onClick }) => (
 <div
  onClick={onClick}
  className="cursor-pointer border border-gray-300 rounded-lg p-6 shadow hover:bg-gray-100 transition"
 >
  <h3 className="text-xl font-semibold mb-2">{title}</h3>
  <p>Cliquer ici pour accéder.</p>
 </div>
);

const Section = ({ title, children, onBack }) => (
 <div>
  <button
   onClick={onBack}
   className="mb-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
  >
   ← Retour
  </button>
  <h3 className="text-xl font-bold mb-4">{title}</h3>
  {children}
 </div>
);

export default AdminDashboard;
