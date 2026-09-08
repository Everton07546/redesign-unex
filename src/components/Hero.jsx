import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-16 md:py-24">
      
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          
          <div className="space-y-6">
            <span className="inline-block bg-lime-400/10 text-lime-400 border border-lime-400/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Inscrições Abertas
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Construa a sua história no <span className="text-lime-400">Ensino Superior</span>.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Formação prática, corpo docente qualificado e infraestrutura completa em Medicina, Direito, Odontologia e diversas outras áreas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#inscreva-se" 
                className="bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold text-center px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Inscreva-se com Nota do ENEM
              </a>
              <a 
                href="#cursos" 
                className="border border-slate-700 hover:border-slate-500 text-white font-medium text-center px-8 py-4 rounded-xl transition-all"
              >
                Conhecer Cursos
              </a>
            </div>
          </div>

          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                alt="Estudantes no campus universitário" 
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}