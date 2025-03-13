"use client"; // Indique que ce module s'exécute côté client

import { useState } from "react"; // Import du hook useState de React

// Level 1: UI Components
// Composant FormInput : champ de saisie avec étiquette pour les formulaires
const FormInput = ({ label, type, name, value, onChange, required = true }) => (
    <div>
        {/* Étiquette du champ */}
        <label className="block text-sm font-medium text-light-text dark:text-gray-200 mb-2">
            {label}
        </label>
        {/* Champ input */}
        <input
            type={type} // Type de l'input (email, texte, password, etc.)
            name={name} // Nom de l'input
            value={value} // Valeur actuelle de l'input
            onChange={onChange} // Fonction déclenchée lors du changement de valeur
            className="w-full px-4 py-3 rounded-lg border border-light-border 
                     dark:border-gray-600 dark:bg-gray-800
                     bg-white dark:bg-gray-800 text-light-text-darker dark:text-white" // Styles CSS pour le champ
            required={required} // Champ requis ou non
        />
    </div>
);

// Level 2: Section Components
// Composant FormHeader : affiche l'en-tête du formulaire (titre et description)
const FormHeader = ({ isLogin }) => (
    <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-light-primary dark:text-accent mb-2">
            {isLogin ? "Connexion" : "Créer un compte"}{" "}
            {/* Titre selon le mode (connexion ou inscription) */}
        </h1>
        <p className="text-light-text dark:text-gray-300">
            {isLogin
                ? "Accédez à votre espace personnel" // Message pour la connexion
                : "Rejoignez notre communauté de lecteur"}{" "}
            {/* Message pour l'inscription */}
        </p>
    </div>
);

// Level 3: Feature Components
// Composant LoginForm : formulaire de connexion avec les champs email et mot de passe
const LoginForm = ({ formData, handleChange, handleSubmit, toggleForm }) => (
    <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ Email */}
        <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
        {/* Champ Mot de passe */}
        <FormInput
            label="Mot de passe"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        {/* Actions du formulaire (bouton de soumission et lien pour changer de formulaire) */}
        <FormActions isLogin={true} toggleForm={toggleForm} />
    </form>
);

// Composant RegisterForm : formulaire d'inscription avec les champs nom, email, mot de passe et confirmation du mot de passe
const RegisterForm = ({ formData, handleChange, handleSubmit, toggleForm }) => (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="firstName"
            value={formData.identifiant}
            onChange={handleChange}
            placeholder="Votre nom"
            className="w-full p-2 mb-4 border rounded"
            required
        />
        <input
            type="text"
            name="lastName"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Votre Prénom"
            className="w-full p-2 mb-4 border rounded"
            required
        />
        {/* <input
            type="text"
            name="username"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre deuxieme prenom"
            className="w-full p-2 mb-4 border rounded"
            required
        /> */}
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre Email"
            className="w-full p-2 mb-4 border rounded"
            required
        />
        <input
            type="text"
            name="addressData"
            value={formData.ville}
            onChange={handleChange}
            placeholder="Votre adresse"
            className="w-full p-2 mb-4 border rounded"
        />
        <input
            type="password"
            name="password"
            value={formData.motDePasse}
            onChange={handleChange}
            placeholder="Mot de passe"
            className="w-full p-2 mb-4 border rounded"
            required
        />
        <input
            type="password"
            name="confirmMotDePasse"
            value={formData.confirmMotDePasse}
            onChange={handleChange}
            placeholder="Confirmer le mot de passe"
            className="w-full p-2 mb-4 border rounded"
            required
        />
        {/* <input
            type="text"
            name="role"
            value={formData.rue}
            onChange={handleChange}
            placeholder="Votre role"
            className="w-full p-2 mb-4 border rounded"
        /> */}

        <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded"
        >
            S'inscrire
        </button>
        <p className="mt-4 text-center">
            Déjà un compte ?{" "}
            <span onClick={toggleForm} className="text-blue-500 cursor-pointer">
                Se connecter
            </span>
        </p>
    </form>
);

// Level 4: UI Elements
// Composant FormActions : définit les boutons d'action du formulaire (soumission et lien de changement de formulaire)
const FormActions = ({ isLogin, toggleForm }) => (
    <>
        {/* Bouton de soumission */}
        <button
            type="submit"
            className="w-full bg-light-primary dark:bg-accent text-white 
                     font-semibold py-3 rounded-lg"
        >
            {isLogin ? "Se connecter" : "S'inscrire"}{" "}
            {/* Texte du bouton selon le mode */}
        </button>
        {/* Lien pour basculer entre connexion et inscription */}
        <p className="text-center text-light-text dark:text-gray-300 mt-4">
            {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
            <button
                type="button"
                onClick={toggleForm} // Permet de changer le mode du formulaire
                className="ml-2 text-light-primary dark:text-accent font-medium"
            >
                {isLogin ? "S'inscrire" : "Se connecter"}{" "}
                {/* Texte du lien selon le mode */}
            </button>
        </p>
    </>
);

// Main Component
// Composant principal EspaceClient : gère l'affichage et la logique des formulaires de connexion et d'inscription
export default function Connexion() {
    // État pour déterminer si l'utilisateur est en mode connexion (true) ou inscription (false)
    const [isLogin, setIsLogin] = useState(true);
    // État pour stocker les données du formulaire
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    });

    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le comportement par défaut de la soumission du formulaire
        console.log("Form submitted:", formData); // Affiche les données du formulaire dans la console
    };

    // Fonction de gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
        setFormData({
            ...formData, // Conserve les valeurs existantes
            [e.target.name]: e.target.value, // Met à jour la valeur du champ modifié
        });
    };

    // Fonction pour basculer entre le formulaire de connexion et d'inscription
    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div
                    className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 
                              border border-light-border dark:border-gray-700
                              shadow-lg dark:shadow-gray-900/30"
                >
                    {/* En-tête du formulaire */}
                    <FormHeader isLogin={isLogin} />
                    {/* Affichage conditionnel du formulaire selon le mode (connexion ou inscription) */}
                    {isLogin ? (
                        <LoginForm
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            toggleForm={toggleForm}
                        />
                    ) : (
                        <RegisterForm
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            toggleForm={toggleForm}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
