import React from 'react';

const statsData = [
  { id: 1, number: '4', label: 'Campo na Bahia', detail: 'Itabuna, Feira, Jequié e Conquista' },
  { id: 2, number: '20+', label: 'Cursos de Graduação', detail: 'Saúde, Humanas e Tecnologia' },
  { id: 3, number: 'Nota 5', label: 'Conceito MEC', detail: 'Excelência acadêmica comprovada' },
  { id: 4, number: '+15 mil', label: 'Alunos Formados', detail: 'Atuando no mercado de trabalho' },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80">
              <p className="text-3xl md:text-4xl font-extrabold text-lime-400 tracking-tight">
                {item.number}
              </p>
              <p className="text-sm font-bold text-white mt-1">
                {item.label}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}