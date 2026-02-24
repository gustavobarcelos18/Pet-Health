// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026
import React, { useState } from "react";

export default function PaginaPets() {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [tutor, setTutor] = useState("");

  function cadastrar(evento: React.FormEvent) {
    evento.preventDefault();
    console.log("Cadastro (ainda sem salvar):", nome, especie, raca, tutor);
    alert("Cadastro enviado (Sprint 1 ainda não salva).");
  }

  return (
    <div className="caixa">
      <h2>Cadastro de Pacientes</h2>

      <form onSubmit={cadastrar}>
        <label>Nome do Pet</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />

        <label>Espécie</label>
        <input value={especie} onChange={(e) => setEspecie(e.target.value)} />

        <label>Raça</label>
        <input value={raca} onChange={(e) => setRaca(e.target.value)} />

        <label>Nome do Tutor</label>
        <input value={tutor} onChange={(e) => setTutor(e.target.value)} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}