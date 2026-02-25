// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { useState, useEffect } from "react";

export default function PaginaConsultas() {
  const medicoFixo = {
    nome: "Dr. Gustavo Barcelos",
    crmv: "12345",
    especialidade: "Clínica Geral Veterinária RPV Desenvolvimento de sistemas - 2026",
  };

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
    <div>
      <div
        className="caixa"
        style={{
          background: "#e8f6f1",
          border: "1px solid #cfeee4",
          marginBottom: "16px",
        }}
      >
        <div style={{ fontWeight: 700 }}>{medicoFixo.nome}</div>
        <div style={{ color: "#6b7280", marginTop: "4px" }}>
          CRMV {medicoFixo.crmv} - {medicoFixo.especialidade}
        </div>
      </div>

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
          <input value={motivo} onChange={(e) => setMotivo(e.target.value)} />

          <button type="submit">Agendar</button>
        </form>
      </div>
    </div>
  );
}