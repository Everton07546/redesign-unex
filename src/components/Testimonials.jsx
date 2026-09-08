import React from 'react';

const testimonials = [
  {
    name: 'Camila Silva',
    course: 'Medicina - Itabuna',
    text: 'A estrutura dos laboratórios de anatomia e o suporte dos professores me deram a segurança que eu precisava para a prática médica.',
  },
  {
    name: 'Lucas Andrade',
    course: 'Sistemas de Informação - Feira de Santana',
    text: 'O foco em projetos práticos desde os primeiros semestres me ajudou a conseguir meu primeiro estágio na área de tecnologia em poucos meses.',
  },
  {
    name: 'Beatriz Costa',
    course: 'Direito - Vitória da Conquista',
    text: 'O Núcleo de Prática Jurídica é incrível. Aprendemos lidando com casos reais e prestando atendimento à comunidade.',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">O que dizem nossos alunos</h2>
          <p className="text-slate-400 mt-3">Histórias reais de quem está transformando o futuro na Unex.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
              <p className="text-slate-300 italic text-sm leading-relaxed mb-6">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-white text-base">{item.name}</h4>
                <p className="text-lime-400 text-xs mt-1">{item.course}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}