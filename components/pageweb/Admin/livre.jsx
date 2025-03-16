"use client"; // Indique que ce module s'exécute côté client
import { useState } from "react";

export default function Livre() {
    const [books, setBooks] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        isbn: "",
        description: "",
        genre: "",
        isAvailable: true,
        stock: 0,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks([...books, { ...formData, id: Date.now() }]);
        setFormData({
            title: "",
            author: "",
            isbn: "",
            description: "",
            genre: "",
            isAvailable: true,
            stock: 0,
        });
    };

    const handleDelete = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    const handleEdit = (book) => {
        setFormData(book);
        handleDelete(book.id);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Formulaire de création de livre */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-light-primary dark:text-accent">
                    Ajouter un livre
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Titre"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Auteur"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleChange}
                        placeholder="ISBN"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        placeholder="Genre"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                        className="w-full p-2 border rounded"
                    />
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="isAvailable"
                            checked={formData.isAvailable}
                            onChange={handleChange}
                        />
                        <span>Disponible</span>
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-light-primary dark:bg-accent text-white py-2 rounded hover:opacity-90 transition"
                    >
                        Ajouter le livre
                    </button>
                </form>
            </div>

            {/* Liste des livres */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-light-primary dark:text-accent">
                    Liste des livres
                </h2>
                {books.length === 0 ? (
                    <p className="text-gray-500">
                        Aucun livre ajouté pour le moment.
                    </p>
                ) : (
                    <ul className="space-y-4">
                        {books.map((book) => (
                            <li
                                key={book.id}
                                className="p-4 border rounded shadow-sm bg-light-bg dark:bg-gray-700"
                            >
                                <h3 className="font-semibold text-lg">
                                    {book.title}
                                </h3>
                                <p>Auteur : {book.author}</p>
                                <p>ISBN : {book.isbn}</p>
                                <p>Genre : {book.genre}</p>
                                <p>Stock : {book.stock}</p>
                                <p>
                                    Status :{" "}
                                    {book.isAvailable
                                        ? "Disponible"
                                        : "Indisponible"}
                                </p>
                                <div className="flex space-x-2 mt-2">
                                    <button
                                        onClick={() => handleEdit(book)}
                                        className="px-3 py-1 bg-yellow-400 text-white rounded"
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        onClick={() => handleDelete(book.id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded"
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
