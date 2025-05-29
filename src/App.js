import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './find-a-feeling-no-background.png';
import './App.css';
import { Button } from "./components/ui/button";
import HomePage from './components/homePage.js';
import QuizPage from './components/quizPage.js';
import ResourcesPage from './components/resourcesPage.js';
import AppNavigationMenu from './components/shared/NavigationMenu';
import Footer from './components/shared/Footer';
import createGlobalStyles from './styles/globalStyles'; // Updated import
import { cn } from "./lib/utils";

function App() {
  const [isDiscoveryMode, setIsDiscoveryMode] = useState(() => {
    const savedMode = localStorage.getItem('discoveryMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Get the background color based on current mode
  const { colors, baseColors } = createGlobalStyles(isDiscoveryMode);
  
  // Handle mode change from navigation menu
  const handleModeChange = (mode) => {
    setIsDiscoveryMode(mode);
  };

  // Custom button styles based on discovery mode
  const buttonClasses = cn(
    "mt-10 ml-auto mr-24 font-bold font-slab block text-white text-center px-8 rounded-3xl text-lg transition-all duration-100 transform hover:scale-110 flex items-center justify-center",
    isDiscoveryMode 
      ? `bg-[${colors.titleHex}] h-14 text-xl`
      : `bg-[${baseColors.pink.light}] h-10`
  );

  const [isHovered, setIsHovered] = useState(false);

  const baseBg = isDiscoveryMode 
    ? colors.titleHex 
    : baseColors.pink.light;
  
  const hoverBg = isDiscoveryMode 
    ? baseColors.green.medium 
    : baseColors.pink.medium;
  
  const dynamicStyle = {
    backgroundColor: isHovered ? hoverBg : baseBg,
  };

  return (
    <Router>
      <div className={`App ${colors.bg} flex flex-col min-h-screen`}>
        <AppNavigationMenu 
          logo={logo} 
          title="Find-a-Feeling" 
          onModeChange={handleModeChange}
        />
        
        <Link to="/quiz">
          <Button 
            className={buttonClasses} 
            style={dynamicStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            Start Quiz
          </Button>
        </Link>
        
        <div className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </div>
        
        <Footer isDiscoveryMode={isDiscoveryMode} />
      </div>
    </Router>
  );
}

export default App;