
import React from 'react';
import { MapPin, Youtube } from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      title: "Sede Operativa",
      location: "Bari",
      description: "Centro operativo principale per la gestione della flotta"
    },
    {
      title: "Sede Legale", 
      location: "Venezia",
      description: "Sede legale e amministrativa della società"
    },
    {
      title: "Deposito",
      location: "Pescara", 
      description: "Uffici per consulenza e supporto clienti"
    }
  ];

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@eurotrucksimulator2-v2b?si=tPWofkutN1Z_TvuV",
      icon: Youtube,
      color: "bg-red-600 hover:bg-red-700"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@elgk_adriatic_solution",
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: "bg-black hover:bg-gray-800"
    },
    {
      name: "TrucksBook",
      url: "https://trucksbook.eu/company/207327",
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
        </svg>
      ),
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <section id="contatti" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Le Nostre Sedi</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Siamo presenti sul territorio nazionale con uffici strategicamente ubicati
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Dove Trovarci</h3>
            
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{office.title}</h4>
                    <p className="text-lg text-blue-600 font-medium mb-2">{office.location}</p>
                    <p className="text-slate-600">{office.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Seguici sui Social</h3>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 p-4 rounded-lg text-white ${social.color} transition-all hover:scale-105 transform`}
                >
                  <div className="flex-shrink-0">
                    <social.icon />
                  </div>
                  <div>
                    <span className="font-semibold">{social.name}</span>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-3">Resta connesso con noi!</h4>
              <p className="text-slate-600">
                Seguici sui nostri canali social per rimanere aggiornato sulle nostre attività e novità.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
