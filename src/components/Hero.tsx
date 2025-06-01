
import React from 'react';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-sm">
              🚛 Soluzioni logistiche professionali
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              E-LOGISTIK
              <span className="block text-blue-400">Adriatic Solutions</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Leader nel settore dei trasporti virtuali su Euro Truck Simulator 2. 
              Offriamo servizi di logistica all'avanguardia con una flotta moderna 
              e personale altamente qualificato.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
                <span>Scopri i nostri servizi</span>
                <ArrowRight size={20} />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Contattaci
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
              <img 
                src="/lovable-uploads/d4b99117-2814-4c47-9115-e55a7af3b178.png" 
                alt="E-LOGISTIK Logo" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white text-slate-900 p-4 rounded-lg shadow-xl">
              <div className="flex items-center space-x-2">
                <Shield className="text-green-600" size={20} />
                <span className="font-semibold text-sm">Trasporti Sicuri</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-lg shadow-xl">
              <div className="flex items-center space-x-2">
                <Clock className="text-white" size={20} />
                <span className="font-semibold text-sm">24/7 Disponibile</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-slate-700">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">500+</div>
            <div className="text-slate-300">Trasporti Completati</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-slate-300">Camion in Flotta</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-slate-300">Supporto Clienti</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">100%</div>
            <div className="text-slate-300">Soddisfazione</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
