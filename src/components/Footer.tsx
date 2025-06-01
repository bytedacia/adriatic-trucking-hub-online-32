
import React from 'react';
import { Truck, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition-colors">
                <Linkedin size={20} />
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
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Consulenza Logistica</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>Via del Porto 123</p>
                  <p>34123 Trieste, Italia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+39 040 123 4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">info@e-logistik.it</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-blue-400 mt-1" />
                <div className="text-sm">
                  <p>Lun-Ven: 24/7</p>
                  <p>Weekend: Su richiesta</p>
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
