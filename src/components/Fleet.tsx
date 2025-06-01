
import React from 'react';
import { Gauge, Fuel, Users, Award } from 'lucide-react';
import { useTrucksBookData } from '../hooks/useTrucksBookData';

const Fleet = () => {
  const { data: companyData, isLoading, error } = useTrucksBookData();

  const stats = [
    { 
      icon: Users, 
      value: isLoading ? '...' : error ? 'N/A' : companyData?.members_count?.toString() || '0', 
      label: "Membri Totali" 
    },
    { 
      icon: Gauge, 
      value: isLoading ? '...' : error ? 'N/A' : companyData?.online_members?.toString() || '0', 
      label: "Membri Online" 
    },
    { 
      icon: Fuel, 
      value: isLoading ? '...' : error ? 'N/A' : companyData?.distance ? `${Math.round(companyData.distance / 1000)}K km` : '0 km', 
      label: "Distanza Totale" 
    },
    { 
      icon: Award, 
      value: isLoading ? '...' : error ? 'N/A' : companyData?.deliveries?.toLocaleString() || '0', 
      label: "Consegne" 
    }
  ];

  return (
    <section id="flotta" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {companyData?.logo && (
            <div className="flex justify-center mb-6">
              <img 
                src={companyData.logo} 
                alt="Logo aziendale" 
                className="h-24 w-auto"
              />
            </div>
          )}
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {isLoading ? 'Caricamento...' : error ? 'E-LOGISTIK Adriatic Solutions' : companyData?.name || 'E-LOGISTIK Adriatic Solutions'}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Statistiche aziendali in tempo reale della nostra flotta professionale
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

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Richiedi Preventivo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
