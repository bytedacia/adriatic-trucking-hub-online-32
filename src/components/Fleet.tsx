
import React from 'react';
import { Gauge, Fuel, Users, Award } from 'lucide-react';

const Fleet = () => {
  const trucks = [
    {
      name: "Volvo FH16",
      category: "Trasporti Pesanti",
      power: "750 HP",
      capacity: "40 tonnellate",
      features: ["Euro 6", "GPS Tracking", "Frigorifero"]
    },
    {
      name: "Scania R Series",
      category: "Lunga Distanza", 
      power: "650 HP",
      capacity: "44 tonnellate",
      features: ["Cruise Control", "Lane Assist", "Comfort Cab"]
    },
    {
      name: "MAN TGX",
      category: "Trasporti Speciali",
      power: "640 HP", 
      capacity: "38 tonnellate",
      features: ["Sistema ADR", "Carico Speciale", "Sicurezza Avanzata"]
    },
    {
      name: "Mercedes Actros",
      category: "Express",
      power: "625 HP",
      capacity: "42 tonnellate", 
      features: ["Consegna Rapida", "Tracking Live", "Eco Efficient"]
    }
  ];

  const stats = [
    { icon: Gauge, value: "50+", label: "Veicoli in Flotta" },
    { icon: Fuel, value: "95%", label: "Efficienza Carburante" },
    { icon: Users, value: "120+", label: "Autisti Certificati" },
    { icon: Award, value: "99.8%", label: "Affidabilità" }
  ];

  return (
    <section id="flotta" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">La Nostra Flotta</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Una flotta moderna e diversificata per ogni tipo di trasporto, mantenuta ai massimi standard di qualità
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-blue-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Truck Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trucks.map((truck, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-slate-800 rounded-lg p-4 mb-4 text-center">
                <div className="text-4xl mb-2">🚛</div>
                <div className="text-white font-semibold">{truck.name}</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Categoria:</span>
                  <span className="font-semibold text-slate-900">{truck.category}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Potenza:</span>
                  <span className="font-semibold text-blue-600">{truck.power}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Capacità:</span>
                  <span className="font-semibold text-slate-900">{truck.capacity}</span>
                </div>
                
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-sm font-semibold text-slate-700 mb-2">Caratteristiche:</div>
                  <div className="flex flex-wrap gap-1">
                    {truck.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Richiedi Preventivo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
