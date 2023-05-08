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
    }, []);

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
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
