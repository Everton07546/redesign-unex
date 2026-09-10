import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Units from './components/Units';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-lime-400 selection:text-slate-950 overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <Units />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />

      {/* Widget do ChatBot Flutuante */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div className="mb-4 w-80 sm:w-96 shadow-2xl transition-all duration-300">
            <ChatBot />
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          aria-label="Abrir assistente virtual"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}