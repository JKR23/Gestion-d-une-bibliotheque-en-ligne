"use client"; // Indique que ce module s'exécute côté client
import { useState } from "react";

export default function Utilisateur() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        role: "",
        addressData: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, { ...formData, id: Date.now() }]);
        setFormData({
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            email: "",
            role: "",
            addressData: "",
        });
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const handleEdit = (user) => {
        setFormData(user);
        handleDelete(user.id);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Formulaire de création d'utilisateur */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-light-primary dark:text-accent">
                    Ajouter un utilisateur
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Prénom"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Nom"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Nom d'utilisateur"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        required
                    />

                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Rôle"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="addressData"
                        value={formData.addressData}
                        onChange={handleChange}
                        placeholder="Adresse"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Mot de passe"
                        className="w-full p-2 border rounded"
                        required
                    />

                    <input
                        type="password"
                        name="confirmMotDePasse"
                        value={formData.confirmMotDePasse}
                        onChange={handleChange}
                        placeholder="Confirmer le mot de passe"
                        className="w-full p-2 mb-4 border border-blue-500 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:opacity-90 transition"
                    >
                        Ajouter l'utilisateur
                    </button>
                </form>
            </div>

            {/* Liste des utilisateurs */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-light-primary dark:text-accent">
                    Liste des utilisateurs
                </h2>
                {users.length === 0 ? (
                    <p className="text-gray-500">
                        Aucun utilisateur pour le moment.
                    </p>
                ) : (
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700">
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Nom
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Username
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Email
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Rôle
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Adresse
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-b dark:border-gray-600"
                                >
                                    <td className="px-4 py-2">
                                        {user.firstName} {user.lastName}
                                    </td>
                                    <td className="px-4 py-2">
                                        {user.username}
                                    </td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.role}</td>
                                    <td className="px-4 py-2">
                                        {user.addressData}
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="px-3 py-1 bg-yellow-400 text-white rounded"
                                            >
                                                Modifier
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(user.id)
                                                }
                                                className="px-3 py-1 bg-red-500 text-white rounded"
                                            >
                                                Supprimer
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
