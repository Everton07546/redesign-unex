import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          
          <div className="space-y-4 md:col-span-1">
            <span className="text-2xl font-black tracking-wider text-lime-400">UNEX</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Instituição de Ensino Superior comprometida com a inovação, prática profissional e transformação social.
            </p>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Institucional</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sobre" className="hover:text-lime-400 transition-colors">A Unex</a></li>
              <li><a href="#cursos" className="hover:text-lime-400 transition-colors">Graduação</a></li>
              <li><a href="#unidades" className="hover:text-lime-400 transition-colors">Unidades</a></li>
              <li><a href="#inscreva-se" className="hover:text-lime-400 transition-colors">Vestibular</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Formas de Ingresso</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-400">Nota do ENEM</span></li>
              <li><span className="text-slate-400">Vestibular Online</span></li>
              <li><span className="text-slate-400">Transferência Externa</span></li>
              <li><span className="text-slate-400">Segunda Graduação</span></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Contato</h4>
            <p className="text-xs text-slate-400 mb-2">Central de Atendimento:</p>
            <p className="text-sm font-bold text-lime-400 mb-4">0800 000 0000</p>
            <div className="flex space-x-4 text-slate-400">
              <a 
  href="https://www.instagram.com/unexoficial/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="hover:text-lime-400 transition-colors"
>
  Instagram
</a>
<a 
  href="https://www.linkedin.com/school/unexoficial/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="hover:text-lime-400 transition-colors"
>
  LinkedIn
</a>
<a 
  href="https://www.youtube.com/@UnexOficial" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="hover:text-lime-400 transition-colors"
>
  YouTube
</a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-900 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Unex. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 italic">Projeto acadêmico sem fins lucrativos (Redesign para fins didáticos).</p>
        </div>
      </div>
    </footer>
  );
}