
import React from 'react';
import { Truck, Package, Clock, Shield, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Trasporti Internazionali",
      description: "Servizi di trasporto merci su lunga distanza attraverso tutta Europa con la massima professionalità.",
      features: ["Copertura europea", "Tracking in tempo reale", "Assicurazione completa"]
    },
    {
      icon: Package,
      title: "Logistica Integrata",
      description: "Soluzioni complete di magazzinaggio, gestione inventario e distribuzione per ogni esigenza.",
      features: ["Gestione magazzino", "Controllo inventario", "Distribuzione rapida"]
    },
    {
      icon: Clock,
      title: "Consegne Express",
      description: "Servizio di consegna urgente 24/7 per le spedizioni più critiche e importanti.",
      features: ["Servizio 24/7", "Consegna rapida", "Priorità massima"]
    },
    {
      icon: Shield,
      title: "Trasporti Speciali",
      description: "Gestione di carichi speciali, merci pericolose e trasporti eccezionali con massima sicurezza.",
      features: ["Carichi speciali", "Merci pericolose", "Trasporti eccezionali"]
    },
    {
      icon: MapPin,
      title: "Pianificazione Rotte",
      description: "Ottimizzazione dei percorsi per garantire efficienza, risparmio e rispetto dei tempi.",
      features: ["Ottimizzazione percorsi", "Risparmio carburante", "Tempi garantiti"]
    }
  ];

  return (
    <section id="servizi" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">I Nostri Servizi</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Offriamo una gamma completa di servizi logistici per soddisfare ogni esigenza di trasporto
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-blue-600" size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Scopri di più →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
