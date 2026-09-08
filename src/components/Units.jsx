import React from 'react';

const unitsList = [
  { city: 'Itabuna', address: 'Av. José Soares Pinheiro, 1191 - Centro', coursesCount: '15+ Cursos', badge: 'Sul da Bahia' },
  { city: 'Feira de Santana', address: 'Av. Artêmia Pires Freitas, s/n - SIM', coursesCount: '18+ Cursos', badge: 'Portal do Sertão' },
  { city: 'Jequié', address: 'Av. Otávio Mangabeira, 250 - Mandacaru', coursesCount: '12+ Cursos', badge: 'Médio Rio de Contas' },
  { city: 'Vitória da Conquista', address: 'Av. Juracy Magalhães, 3340 - Felícia', coursesCount: '14+ Cursos', badge: 'Sudoeste Baiano' },
];

export default function Units() {
  return (
    <section id="unidades" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-400 font-bold text-xs uppercase tracking-widest bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
            Presença Regional
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight">Nossas Unidades</h2>
          <p className="text-slate-400 mt-4 text-base">
            Campo estruturados com laboratórios de ponta e localização estratégica na Bahia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {unitsList.map((unit, index) => (
            <div 
              key={index} 
              className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-lime-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-lime-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    {unit.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{unit.coursesCount}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors mb-2">
                  {unit.city}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {unit.address}
                </p>
              </div>

              <a 
                href="#inscreva-se" 
                className="mt-8 text-center w-full py-3 bg-slate-900 hover:bg-lime-400 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-800"
              >
                Escolher {unit.city}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}