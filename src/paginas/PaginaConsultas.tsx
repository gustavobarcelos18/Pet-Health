// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { useState, useEffect } from "react";

export default function PaginaConsultas() {
  const [listaPets, setListaPets] = useState<any[]>([]);
  const [petSelecionado, setPetSelecionado] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [motivo, setMotivo] = useState("");

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("pets");

    if (dadosSalvos) {
      setListaPets(JSON.parse(dadosSalvos));
    }
  }, []);

  function agendar(evento: React.FormEvent) {
    evento.preventDefault();

    alert("Consulta enviada (ainda não salva).");
  }

  return (
    <div className="caixa">
      <h2>Agendar Consulta</h2>

      <form onSubmit={agendar}>
        <label>Selecione o Pet</label>
        <select
          value={petSelecionado}
          onChange={(e) => setPetSelecionado(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "6px",
            marginBottom: "12px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
        >
          <option value="">Selecione</option>
          {listaPets.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.nome}
            </option>
          ))}
        </select>

        <label>Data</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <label>Horário</label>
        <input
          type="time"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />

        <label>Motivo</label>
        <input
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
        />

        <button type="submit">Agendar</button>
      </form>
    </div>
  );
}