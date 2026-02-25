// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { useEffect, useState } from "react";

export default function PaginaListagem() {
  const [listaPets, setListaPets] = useState<any[]>([]);
  const [petSelecionado, setPetSelecionado] = useState<any>(null);

  useEffect(() => {
    const dados = localStorage.getItem("pets");

    if (dados) {
      setListaPets(JSON.parse(dados));
    }
  }, []);

  function verDetalhes(pet: any) {
    setPetSelecionado(pet);
  }

  function fecharDetalhes() {
    setPetSelecionado(null);
  }

  return (
    <div className="caixa">
      <h2>Pacientes Cadastrados</h2>

      {listaPets.length === 0 && <p>Nenhum pet cadastrado.</p>}

      {listaPets.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Nome
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Espécie
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Tutor
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "10px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {listaPets.map((pet) => (
              <tr key={pet.id}>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  {pet.nome}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  {pet.especie}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  {pet.tutor}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #f3f4f6",
                    textAlign: "right",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => verDetalhes(pet)}
                    style={{
                      background: "#f3f4f6",
                      color: "#111827",
                      border: "1px solid #e5e7eb",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {petSelecionado && (
        <div
          style={{
            marginTop: "18px",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #e5e7eb",
            background: "#fafafa",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: "6px" }}>
            Detalhes do Pet
          </div>

          <div>Nome: {petSelecionado.nome}</div>
          <div>Espécie: {petSelecionado.especie}</div>
          <div>Raça: {petSelecionado.raca || ""}</div>
          <div>Tutor: {petSelecionado.tutor}</div>

          <button
            type="button"
            onClick={fecharDetalhes}
            style={{
              marginTop: "12px",
              background: "#0b8f6a",
              color: "white",
              border: 0,
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}