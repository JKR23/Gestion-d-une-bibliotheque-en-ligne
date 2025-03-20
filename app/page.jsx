"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header.jsx";
import Catalogue from "@/app/catalogue/page.jsx";
import Contact from "@/app/contact/page";
import Reservation from "@/app/reservation/page.jsx";
import Accueil from "@/components/pageweb/Accueil/Accueil";
import AdminDashboard from "@/components/pageweb/Admin/AdminDashboard";

export default function PageApresConnexionDeUtilisateur() {
    const [page, setPage] = useState("accueil");
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Récupération du rôle de l'utilisateur depuis le localStorage
        const storedRole = localStorage.getItem("userRole");
        setUserRole(storedRole);
    }, []);

    const changePage = (newPage) => {
        setPage(newPage);
    };

    const handleLogout = () => {
        localStorage.setItem("isLoggedIn", "false");
        localStorage.removeItem("userRole");
        window.location.reload();
    };

    const renderPage = () => {
        switch (page) {
            case "accueil":
                return <Accueil />;
            case "AdminDashboard":
                return <AdminDashboard />;
            case "catalogue":
                return <Catalogue />;
            case "reservation":
                return <Reservation />;
            case "contact":
                return <Contact />;

            default:
                return <Accueil />;
        }
    };

    return (
        <div>
            <Header
                changePage={changePage}
                currentPage={page}
                onLogout={handleLogout}
                role={userRole}
            />
            <main className="min-h-screen pt-0">{renderPage()}</main>
        </div>
    );
}
