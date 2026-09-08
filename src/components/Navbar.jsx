import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-lime-400">UNEX</span>
            <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded font-medium">Ensino Superior</span>
          </div>

          
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
            <a href="#sobre" className="hover:text-lime-400 transition-colors">A Unex</a>
            <a href="#cursos" className="hover:text-lime-400 transition-colors">Cursos</a>
            <a href="#unidades" className="hover:text-lime-400 transition-colors">Unidades</a>
            <a href="#depoimentos" className="hover:text-lime-400 transition-colors">Depoimentos</a>
          </div>

          
          <div className="hidden md:block">
            <a 
              href="#inscreva-se" 
              className="bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-lime-400/20"
            >
              Vestibular 2026.2
            </a>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a href="#sobre" className="block text-slate-200 hover:text-lime-400 py-2">A Unex</a>
          <a href="#cursos" className="block text-slate-200 hover:text-lime-400 py-2">Cursos</a>
          <a href="#unidades" className="block text-slate-200 hover:text-lime-400 py-2">Unidades</a>
          <a href="#depoimentos" className="block text-slate-200 hover:text-lime-400 py-2">Depoimentos</a>
          <a 
            href="#inscreva-se" 
            className="block w-full text-center bg-lime-400 text-slate-950 font-bold py-3 rounded-lg mt-4"
          >
            Inscreva-se Agora
          </a>
        </div>
      )}
    </nav>
  );
}