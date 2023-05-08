"use client";
import { useState, useEffect } from "react";
import { MdModeNight, MdLightMode } from "react-icons/md";

export default function ColorModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Verifica se o modo escuro está ativado no sistema operacional do usuário
        setIsDarkMode(
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );

        // Recupera o modo selecionado anteriormente pelo usuário no localStorage
        const savedMode = localStorage.getItem("mode");
        if (savedMode) {
            setIsDarkMode(savedMode === "dark");
            document.documentElement.classList.toggle(
                "dark",
                savedMode === "dark"
            );
        }
    }, []);

    function toggleDarkMode() {
        const newMode = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", newMode === "dark");

        // Salva o modo selecionado pelo usuário no localStorage
        localStorage.setItem("mode", newMode);
    }

    return (
        <button
            onClick={toggleDarkMode}
            className="text-white dark:text-gray600"
        >
            {isDarkMode ? <MdLightMode size={25} /> : <MdModeNight size={25} />}
        </button>
    );
}
