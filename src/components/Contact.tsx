
import React, { useState } from 'react';
import { MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-3">Pronto per iniziare?</h4>
              <p className="text-slate-600 mb-4">
                Richiedi un preventivo gratuito per i tuoi trasporti. Il nostro team ti contatterà entro 24 ore.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Richiedi Preventivo
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Invia un Messaggio</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="tua.email@esempio.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Oggetto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Seleziona un oggetto</option>
                  <option value="preventivo">Richiesta Preventivo</option>
                  <option value="informazioni">Informazioni Generali</option>
                  <option value="supporto">Supporto Tecnico</option>
                  <option value="partnership">Partnership</option>
                  <option value="altro">Altro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Descrivi le tue esigenze o fai una domanda..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Send size={20} />
                <span>Invia Messaggio</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
