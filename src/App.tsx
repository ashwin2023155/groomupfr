import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ColorAnalysisPage from './pages/ColorAnalysisPage';
import OutfitRatingPage from './pages/OutfitRatingPage';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className={`min-h-screen transition-colors duration-200 dark:bg-gray-900 
          bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/color-analysis" element={<ColorAnalysisPage />} />
            <Route path="/outfit-rating" element={<OutfitRatingPage />} />
          </Routes>
          <Chatbot />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;