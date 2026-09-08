import React from 'react';

const coursesList = [
  { id: 1, name: 'Medicina', area: 'Saúde', duration: '12 Semestres', tag: 'Destaque' },
  { id: 2, name: 'Direito', area: 'Humanas', duration: '10 Semestres', tag: 'Tradicional' },
  { id: 3, name: 'Odontologia', area: 'Saúde', duration: '10 Semestres', tag: 'Prática' },
  { id: 4, name: 'Sistemas de Informação', area: 'Tecnologia', duration: '8 Semestres', tag: 'Inovação' },
  { id: 5, name: 'Enfermagem', area: 'Saúde', duration: '10 Semestres', tag: 'Alta Demanda' },
  { id: 6, name: 'Medicina Veterinária', area: 'Saúde', duration: '10 Semestres', tag: 'Completo' },
];

export default function Courses() {
  return (
    <section id="cursos" className="py-24 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Cursos em Destaque</h2>
          <p className="text-slate-400 mt-4 text-base">
            Matricule-se na formação ideal para acelerar seu ingresso no mercado de trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesList.map((course) => (
            <div 
              key={course.id} 
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-7 hover:border-lime-400/60 transition-all duration-300 group flex flex-col justify-between hover:shadow-2xl hover:shadow-lime-400/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs bg-lime-400/10 text-lime-400 border border-lime-400/20 px-3 py-1 rounded-full font-bold">
                    {course.area}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{course.duration}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-lime-400 transition-colors">
                  {course.name}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{course.tag}</span>
                <a href="#inscreva-se" className="text-sm font-bold text-lime-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Saiba mais &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}