import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Garanta que o dotenv é carregado logo no início
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Validação simples da chave antes de iniciar
if (!process.env.GEMINI_API_KEY) {
  console.error("ERRO CRÍTICO: A variável GEMINI_API_KEY não está definida no arquivo .env");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
// Ajustado para a versão estável compatível com a SDK padrão
const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash",
  systemInstruction: `Você é o Assistente Virtual da Unex (Centro Universitário). 
Seu papel é ajudar alunos e futuros estudantes com informações sobre cursos (como Sistemas de Informação, Medicina, Direito, Odontologia), vestibulinhos, prazos e os campi de Itabuna, Feira de Santana, Jequié e Vitória da Conquista.
Mantenha um tom profissional, acolhedor e direto. Sempre responda em português brasileiro.`
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "O campo 'message' é obrigatório." });
    }

    const result = await model.generateContent(message);
    const responseText = result.response.text();

    res.json({ reply: responseText });
  } catch (error) {
    // Imprime o erro detalhado no terminal do VS Code/Node
    console.error("Detalhes do erro na API do Gemini:", error.message || error);
    
    res.status(500).json({ 
      error: "Falha ao processar a resposta da IA.",
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});