
import React from 'react';
import { Truck, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">E-LOGISTIK</h3>
                <p className="text-sm text-slate-300">Adriatic Solutions S.p.A.</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leader nel settore dei trasporti virtuali su Euro Truck Simulator 2. 
              Offriamo servizi di logistica all'avanguardia con una flotta moderna 
              e personale altamente qualificato per garantire il massimo livello di professionalità.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://trucksbook.eu/company/207327" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@elgk_adriatic_solution" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Servizi</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Trasporti Internazionali</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Logistica Integrata</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Consegne Express</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Trasporti Speciali</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Pianificazione Rotte</a></li>
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-6">Le Nostre Sedi</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Sede Operativa</p>
                  <p className="text-slate-300">Bari</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Sede Legale</p>
                  <p className="text-slate-300">Venezia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Deposito</p>
                  <p className="text-slate-300">Pescara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © 2024 E-LOGISTIK Adriatic Solutions S.p.A. Tutti i diritti riservati.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Termini di Servizio</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
