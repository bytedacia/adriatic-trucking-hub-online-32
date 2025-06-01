
import React, { useState } from 'react';
import { Menu, X, Truck, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar con contatti */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+39 040 123 4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@e-logistik.it</span>
            </div>
          </div>
          <div className="text-xs text-slate-300">
            Servizi di logistica professionale
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Truck size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">E-LOGISTIK</h1>
              <p className="text-xs text-slate-300">Adriatic Solutions S.p.A.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors font-medium">Home</a>
            <a href="#servizi" className="hover:text-blue-400 transition-colors font-medium">Servizi</a>
            <a href="#flotta" className="hover:text-blue-400 transition-colors font-medium">Flotta</a>
            <a href="#chi-siamo" className="hover:text-blue-400 transition-colors font-medium">Chi Siamo</a>
            <a href="#contatti" className="hover:text-blue-400 transition-colors font-medium">Contatti</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="hover:text-blue-400 transition-colors font-medium" onClick={toggleMenu}>Home</a>
              <a href="#servizi" className="hover:text-blue-400 transition-colors font-medium" onClick={toggleMenu}>Servizi</a>
              <a href="#flotta" className="hover:text-blue-400 transition-colors font-medium" onClick={toggleMenu}>Flotta</a>
              <a href="#chi-siamo" className="hover:text-blue-400 transition-colors font-medium" onClick={toggleMenu}>Chi Siamo</a>
              <a href="#contatti" className="hover:text-blue-400 transition-colors font-medium" onClick={toggleMenu}>Contatti</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
