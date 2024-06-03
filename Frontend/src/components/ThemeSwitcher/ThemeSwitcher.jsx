// frontend/src/components/ThemeSwitcher.js
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded flex items-center"
        >
            {theme === 'light' ? (
                <FaMoon className="text-gray-500" size={24} />
            ) : (
                <FaSun className="text-gray-500" size={24} />
            )}
           
        </button>
    );
};

export default ThemeSwitcher;
