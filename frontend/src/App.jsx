import React, { useState, useEffect, useCallback } from "react";
import "./App.css"; // Estilos básicos

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [alunos, setAlunos] = useState([]);
  const [mensagem, setMensagem] = useState({ texto: "", tipo: "" });
  const API_URL = "http://localhost:3000/alunos";

  const fetchAlunos = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Falha ao buscar alunos.");
      const data = await response.json();
      setAlunos(data);
    } catch (err) {
      setMensagem({
        texto: "Erro ao carregar alunos: " + err.message,
        tipo: "erro",
      });
      console.error(err);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem({ texto: "", tipo: "" });

    if (!nome || !email) {
      setMensagem({ texto: "Nome e Email são obrigatórios.", tipo: "erro" });
      return;
    }

    const novoAluno = { nome, email, curso };
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoAluno),
      });
      const data = await response.json();

      if (!response.ok)
        throw new Error(data.error || "Erro ao cadastrar aluno.");

      setMensagem({
        texto: `Aluno "${data.nome}" cadastrado com sucesso!`,
        tipo: "sucesso",
      });
      setNome("");
      setEmail("");
      setCurso("");
      fetchAlunos();
    } catch (err) {
      setMensagem({ texto: err.message, tipo: "erro" });
      console.error(err);
    }
  };

  const handleDelete = async (alunoId, alunoNome) => {
    if (
      !window.confirm(`Tem certeza que deseja remover o aluno "${alunoNome}"?`)
    )
      return;

    setMensagem({ texto: "", tipo: "" });
    try {
      const response = await fetch(`${API_URL}/${alunoId}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Erro ao deletar aluno.");

      setMensagem({
        texto: data.message || `Aluno "${alunoNome}" removido!`,
        tipo: "sucesso",
      });
      fetchAlunos();
    } catch (err) {
      setMensagem({ texto: err.message, tipo: "erro" });
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Cadastro de Alunos</h1>

      {mensagem.texto && (
        <div className={`mensagem ${mensagem.tipo}`}>{mensagem.texto}</div>
      )}

      <form onSubmit={handleSubmit} className="aluno-form">
        <h2>Adicionar Novo Aluno</h2>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome completo"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@exemplo.com"
            required
          />
        </div>
        <div>
          <label htmlFor="curso">Curso (Opcional):</label>
          <input
            id="curso"
            type="text"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            placeholder="Curso do aluno"
          />
        </div>
        <button type="submit">Cadastrar Aluno</button>
      </form>

      <div className="lista-alunos">
        <h2>Alunos Cadastrados</h2>
        {alunos.length === 0 && !mensagem.texto.includes("Erro ao carregar") ? (
          <p>Nenhum aluno cadastrado ainda.</p>
        ) : (
          <ul>
            {alunos.map((aluno) => (
              <li key={aluno.id}>
                <div>
                  <strong>{aluno.nome}</strong> ({aluno.email})
                  <br />
                  <em>{aluno.curso || "Curso não informado"}</em>
                </div>
                <button
                  onClick={() => handleDelete(aluno.id, aluno.nome)}
                  className="botao-deletar"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
