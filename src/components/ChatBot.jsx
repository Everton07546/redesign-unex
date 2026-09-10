import React, { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', text: 'Erro ao obter resposta.' }]);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Servidor indisponível.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto m-4 p-4 border border-slate-700 bg-slate-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-lime-400">Assistente Unex IA</h2>
      
      <div className="h-64 overflow-y-auto mb-4 space-y-2 p-2 bg-slate-950 rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-lime-500 text-black ml-auto'
                : 'bg-slate-800 text-white mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p className="text-gray-400 text-sm italic">Pensando...</p>}
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua dúvida..."
          className="flex-1 p-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-lime-400"
        />
        <button
          type="submit"
          className="bg-lime-400 text-black px-4 py-2 rounded font-semibold hover:bg-lime-300 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}