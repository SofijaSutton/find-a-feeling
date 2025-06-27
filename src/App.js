import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './find-a-feeling-no-background.png'
import './App.css';
import { Button } from "./components/ui/button";
import HomePage from './components/homePage.js';
import QuizPage from './components/quizPage.js';
import ResourcesPage from './components/resourcesPage.js';
import AppNavigationMenu from './components/shared/NavigationMenu';
import Footer from './components/shared/Footer';
import { createTheme } from './styles/theme';
import { cn } from "./lib/utils";

function App() {
  const [isDiscoveryMode, setIsDiscoveryMode] = useState(() => {
    const savedMode = localStorage.getItem('discoveryMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Get the theme based on current mode
  const theme = createTheme(isDiscoveryMode);
  const { colors } = theme;
  
  // Handle mode change from navigation menu
  const handleModeChange = (mode) => {
    setIsDiscoveryMode(mode);
  };

  return (
    <Router>
      <div className={`App ${colors.bg.primary} flex flex-col min-h-screen`}>
        <AppNavigationMenu 
          logo={logo} 
          onModeChange={handleModeChange}
        />

        
        <div className="w-full px-20 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage isDiscoveryMode={isDiscoveryMode} theme={theme} />} />
            <Route path="/quiz" element={<QuizPage isDiscoveryMode={isDiscoveryMode} theme={theme} />} />
            <Route path="/resources" element={<ResourcesPage isDiscoveryMode={isDiscoveryMode} theme={theme} />} />
          </Routes>
        </div>
        
        <Footer isDiscoveryMode={isDiscoveryMode} />
      </div>
    </Router>
  );
}

export default App;