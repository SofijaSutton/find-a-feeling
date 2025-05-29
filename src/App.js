import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './find-a-feeling-no-background.png'
import './App.css';
import { Button } from "./components/ui/button";
import HomePage from './components/homePage.js';
import QuizPage from './components/quizPage.js';
import ResourcesPage from './components/resourcesPage.js';
import AppNavigationMenu from './components/shared/NavigationMenu';
import Footer from './components/shared/Footer';
import createNavigationStyles from './components/shared/NavigationMenuStyles.js';
import { cn } from "./lib/utils";

function App() {
  const [isDiscoveryMode, setIsDiscoveryMode] = useState(() => {
    const savedMode = localStorage.getItem('discoveryMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Get the background color based on current mode
  const { colors, baseColors } = createNavigationStyles(isDiscoveryMode);
  
  // Handle mode change from navigation menu
  const handleModeChange = (mode) => {
    setIsDiscoveryMode(mode);
  };

  // Custom button styles based on discovery mode
  const buttonClasses = cn(
    "mt-10 ml-auto mr-24 font-bold font-slab block text-white text-center font-bold px-8 rounded-3xl text-lg transition-all duration-100 transform hover:scale-110 flex items-center justify-center",
    isDiscoveryMode 
      ? "bg-[#009422] hover:bg-[#005a2d] h-14 text-xl" // Discovery mode: green with darker green hover, taller height (56px)
      : "bg-[#9c2ca0] hover:bg-[#821882] h-10"  // Regular mode: purple with darker purple hover, normal height (40px)
  );

  return (
    <Router>
      <div className={`App ${colors.bg} flex flex-col min-h-screen`}>
        <AppNavigationMenu 
          logo={logo} 
          title="Find-a-Feeling" 
          onModeChange={handleModeChange}
        />
        
        <Link to="/quiz">
          <Button className={buttonClasses}>
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