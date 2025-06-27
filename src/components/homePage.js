import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card.jsx";
import { Button } from "./ui/button";
import { Link } from 'react-router-dom';
import { cn } from "../lib/utils";

function HomePage({ isDiscoveryMode, theme }) {
  const { colors, components } = theme;
  // Custom button styles based on discovery mode
  const buttonClasses = cn(
    "font-bold font-slab text-white text-center font-bold px-8 rounded-3xl text-lg transition-all duration-100 transform hover:scale-110 flex items-center justify-center",
    isDiscoveryMode 
      ? "bg-brand-green hover:bg-brand-green-dark h-14 text-xl" // Discovery mode: green with darker green hover, taller height (56px)
      : "bg-brand-purple hover:bg-brand-purple-dark h-10"  // Regular mode: purple with darker purple hover, normal height (40px)
  );
  return (
    <div className="flex flex-col gap-8 w-full mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h2 className={cn("text-lg md:text-xl lg:text-2xl", colors.text.headerText)}>
          Discover your emotional landscape through physical awareness
        </h2>
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* TODO: update this section with stepper */}
          <p className="text-lg">Add Stepper here</p>
          <Link to="/quiz">
            <Button className={buttonClasses}>
              Start Quiz
            </Button>
          </Link>    
        </div>  
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left Column - Text Content */}
        <div className="flex flex-col gap-8 w-full">
          {/* Somatic Awareness Section */}
          <Card className={cn(components.card.homeContainer, "w-full")}>
            <CardHeader>
              <CardTitle className={components.card.homeTitle}>About Somatic Awareness</CardTitle>
              <CardDescription className={components.card.homeDescription}>
                Using physical sensations to identify emotions
              </CardDescription>
            </CardHeader>
            <CardContent className={components.card.homeContent}>
              <p>
                Somatic awareness is the ability to recognize and understand the sensations in your body. 
                These physical sensations are often directly connected to your emotional state, 
                serving as valuable clues to identify what you're feeling.
              </p>
              <p>
                By developing somatic awareness, you can learn to interpret these bodily signals—like 
                tension in your shoulders, butterflies in your stomach, or a racing heart—and connect 
                them to specific emotions, helping you better understand your emotional landscape.
              </p>
            </CardContent>
          </Card>

          {/* Using this Tool Section */}
          <Card className={cn(components.card.homeContainer, "w-full")}>
            <CardHeader>
              <CardTitle className={components.card.homeTitle}>Using this Tool</CardTitle>
            </CardHeader>
            <CardContent className={components.card.homeContent}>
              <p>
                This emotion identification tool guides you through a series of questions about your 
                physical sensations and thoughts to help you pinpoint exactly what you're feeling.
              </p>
              <p>
                Start by noticing any physical sensations in your body. Where do you feel tension, 
                lightness, heat, or cold? The quiz will then help you narrow down these sensations 
                to specific emotion categories and eventually to the precise emotion you're experiencing.
              </p>
              <p>
                This process not only helps you name your emotions in the moment but also builds your 
                emotional vocabulary and awareness over time, leading to better emotional regulation 
                and self-understanding.
              </p>
            </CardContent>
            {/* TODO: keep or remove? image should be clickable or just say 'Get Started' on it */}
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/quiz" className={cn(components.button.quizStart, "w-full")}>
                  Start Quiz
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column - Visual Element */}
        <div className="flex items-center justify-center w-full h-full min-h-[400px]">
          <div className="relative w-full h-full max-w-md aspect-square">
            {/* This is a placeholder for the emotion wheel visualization */}
            <div className={cn("absolute inset-0 rounded-full opacity-80", 
              isDiscoveryMode 
                ? "bg-gradient-to-r from-brand-yellow via-brand-green to-brand-red" 
                : "bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200")}></div>
            <div className={cn("absolute inset-[15%] rounded-full opacity-80", 
              isDiscoveryMode 
                ? "bg-gradient-to-r from-brand-yellow-light via-brand-green to-brand-red-light" 
                : "bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300")}></div>
            <div className={cn("absolute inset-[30%] rounded-full opacity-80", 
              isDiscoveryMode 
                ? "bg-gradient-to-r from-brand-yellow via-brand-green-dark to-brand-red" 
                : "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400")}></div>
            <div className={cn("absolute inset-[45%] rounded-full opacity-80", 
              isDiscoveryMode 
                ? "bg-gradient-to-r from-brand-yellow-dark via-brand-green to-brand-red-dark" 
                : "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500")}></div>
            <div className="absolute inset-[60%] rounded-full bg-black"></div>
            
            {/* Dividing lines for the emotion wheel */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[2px] bg-white/30 rotate-0"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[2px] bg-white/30 rotate-60"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[2px] bg-white/30 rotate-120"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className={cn("text-center w-full", components.text.footer)}>
        <p>Learn more about how somatic awareness can help you identify and process emotions.</p>
        <p className="mt-2">
          <Link to="/resources" className={components.link.default}>
            Explore our resources
          </Link>
        </p>
      </div>
    </div>
  );
}

export default HomePage;