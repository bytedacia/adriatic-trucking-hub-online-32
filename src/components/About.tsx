
import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missione",
      description: "Fornire servizi di logistica eccellenti nel mondo di Euro Truck Simulator 2, garantendo professionalità e affidabilità in ogni trasporto."
    },
    {
      icon: Award,
      title: "Qualità",
      description: "Manteniamo i più alti standard di qualità in tutti i nostri servizi, con personale altamente qualificato e procedure certificate."
    },
    {
      icon: Globe,
      title: "Copertura",
      description: "Operiamo su tutto il territorio europeo virtuale, garantendo connessioni logistiche efficienti e tempestive."
    },
    {
      icon: Users,
      title: "Team",
      description: "Il nostro team è composto da professionisti esperti del settore, appassionati di simulazione e logistica."
    }
  ];

  return (
    <section id="chi-siamo" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Chi Siamo</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>E-LOGISTIK Adriatic Solutions S.p.A.</strong> è una società leader nel settore dei trasporti virtuali, 
                specializzata in servizi logistici professionali all'interno del mondo di Euro Truck Simulator 2.
              </p>
              <p>
                Fondata con l'obiettivo di portare realismo e professionalità nel gaming, abbiamo sviluppato 
                una rete di servizi che replica fedelmente le dinamiche del mondo logistico reale.
              </p>
              <p>
                La nostra esperienza pluriennale ci ha permesso di costruire una reputazione solida basata 
                su affidabilità, puntualità e qualità del servizio, diventando il partner di fiducia per 
                centinaia di clienti virtuali.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-slate-900 mb-2">La Nostra Visione</h3>
              <p className="text-slate-700">
                Essere il punto di riferimento per i servizi logistici virtuali, innovando continuamente 
                e mantenendo i più alti standard di qualità nel settore del gaming professionale.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Il Nostro Team</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-slate-600">Anni di Esperienza</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600">120+</div>
                <div className="text-slate-600">Dipendenti</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-slate-600">Veicoli</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-slate-600">Disponibilità</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
