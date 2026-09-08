import React, { useState } from 'react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inscreva-se" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white">Garanta sua Vaga</h2>
            <p className="text-slate-400 mt-2">
              Preencha o formulário abaixo e nossa equipe de consultores entrará em contato com você.
            </p>
          </div>

          {submitted ? (
            <div className="bg-lime-400/10 border border-lime-400 text-lime-400 p-6 rounded-2xl text-center">
              <h3 className="text-xl font-bold">Inscrição Enviada com Sucesso!</h3>
              <p className="text-sm mt-2 text-slate-300">Entraremos em contato muito em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Seu nome"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">E-mail Acadêmico ou Pessoal</label>
                <input 
                  type="email" 
                  required 
                  placeholder="seuemail@exemplo.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Curso de Interesse</label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors">
                  <option>Medicina</option>
                  <option>Direito</option>
                  <option>Odontologia</option>
                  <option>Sistemas de Informação</option>
                  <option>Enfermagem</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Unidade Desejada</label>
                <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-400 transition-colors">
                  <option>Itabuna</option>
                  <option>Feira de Santana</option>
                  <option>Jequié</option>
                  <option>Vitória da Conquista</option>
                </select>
              </div>

              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit"
                  className="w-full bg-lime-400 hover:bg-lime-500 text-slate-950 font-bold py-4 rounded-xl shadow-lg transition-all text-lg"
                >
                  Confirmar Inscrição
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}