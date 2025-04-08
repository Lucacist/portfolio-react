import React, { useState } from 'react';
import Particles from '../components/Particles';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler l'envoi du formulaire
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Votre message a été envoyé avec succès! Je vous répondrai dans les plus brefs délais.'
    });
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Dans un cas réel, vous enverriez les données à un backend ou un service d'email
  };

  return (
    <div className="min-h-screen bg-[var(--couleur-background)] text-[var(--couleur-texte)] p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-glow">Contact</h1>
        
        <div className="bg-[var(--couleur-container)] rounded-3xl border border-[var(--couleur-border)] relative overflow-hidden p-6 md:p-8">
          <div className="absolute inset-0 z-0 w-full h-full">
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={80}
              particleSpread={7}
              speed={0.09}
              particleBaseSize={70}
              moveParticlesOnHover={true}
              alphaParticles={true}
            />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Parlons de votre projet</h2>
              <p className="mb-6">
                Vous avez un projet en tête ou vous souhaitez simplement me contacter ? 
                N'hésitez pas à m'envoyer un message et je vous répondrai dans les plus brefs délais.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Paris, France</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://github.com/Lucacist" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center bg-[var(--couleur-background)] rounded-full hover:bg-opacity-80 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center bg-[var(--couleur-background)] rounded-full hover:bg-opacity-80 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center bg-[var(--couleur-background)] rounded-full hover:bg-opacity-80 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {formStatus.submitted && (
                  <div className={`p-4 rounded-xl ${formStatus.error ? 'bg-red-500 bg-opacity-20' : 'bg-green-500 bg-opacity-20'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--couleur-background)] border border-[var(--couleur-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--couleur-background)] border border-[var(--couleur-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-[var(--couleur-background)] border border-[var(--couleur-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--couleur-background)] border border-[var(--couleur-border)] rounded-xl font-medium hover:bg-opacity-80 transition-all"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="/portfolio-react/" className="inline-block bg-[var(--couleur-container)] border border-[var(--couleur-border)] rounded-full px-6 py-3 text-lg font-medium hover:bg-opacity-80 transition-all">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
