import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './find-a-feeling-no-background.png'
import './App.css'
import { Button } from "./components/shared/button"
import HomePage from './components/homePage.js'
import QuizPage from './components/quizPage.js'
import ResourcesPage from './components/resourcesPage.js'
import AppNavigationMenu from './components/shared/NavigationMenu';

function App() {
  return (
    <Router>
      <div className="App">
      <AppNavigationMenu 
        logo={logo}
        title="Find-a-Feeling"
      />
        <Button className="mt-8">Start Quiz</Button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App