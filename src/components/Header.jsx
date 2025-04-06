import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 bg-red-500`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Luca</h1>
        
        {/* Menu mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Menu desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#accueil" className="text-gray-700 hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Accueil</a></li>
            <li><a href="#apropos" className="text-gray-700 hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">À propos</a></li>
            <li><a href="#competences" className="text-gray-700 hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Compétences</a></li>
            <li><a href="#projets" className="text-gray-700 hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Projets</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-primary font-medium relative after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 w-full">
          <ul className="flex flex-col space-y-4">
            <li><a href="#accueil" className="text-gray-700 hover:text-primary font-medium block" onClick={() => setIsMobileMenuOpen(false)}>Accueil</a></li>
            <li><a href="#apropos" className="text-gray-700 hover:text-primary font-medium block" onClick={() => setIsMobileMenuOpen(false)}>À propos</a></li>
            <li><a href="#competences" className="text-gray-700 hover:text-primary font-medium block" onClick={() => setIsMobileMenuOpen(false)}>Compétences</a></li>
            <li><a href="#projets" className="text-gray-700 hover:text-primary font-medium block" onClick={() => setIsMobileMenuOpen(false)}>Projets</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-primary font-medium block" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
