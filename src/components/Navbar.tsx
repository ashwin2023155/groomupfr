import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Shirt, Home, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    } shadow-lg transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Palette className="h-8 w-8 text-amber-500" />
              <span className="ml-2 font-semibold text-xl">Groomupfr</span>
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              to="/"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/')
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-900'
                  : 'hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900'
              }`}
            >
              <Home className="h-5 w-5 mr-1" />
              Home
            </Link>
            <Link
              to="/color-analysis"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/color-analysis')
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-900'
                  : 'hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900'
              }`}
            >
              <Palette className="h-5 w-5 mr-1" />
              Color Analysis
            </Link>
            <Link
              to="/outfit-rating"
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/outfit-rating')
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-900'
                  : 'hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900'
              }`}
            >
              <Shirt className="h-5 w-5 mr-1" />
              Rate Outfit
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-amber-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;