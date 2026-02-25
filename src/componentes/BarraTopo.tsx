// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { Link, useLocation } from "react-router-dom";

export default function BarraTopo() {
  const localizacao = useLocation();

  function estaAtivo(caminho: string) {
    return localizacao.pathname === caminho;
  }

  function estiloLink(caminho: string) {
    return {
      textDecoration: "none",
      color: estaAtivo(caminho) ? "#0b8f6a" : "#111827",
      background: estaAtivo(caminho) ? "#e8f6f1" : "transparent",
      padding: "8px 12px",
      borderRadius: "999px",
      fontSize: "14px",
    } as React.CSSProperties;
  }

  return (
    <div style={{ background: "white", borderBottom: "1px solid #e5e7eb" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: 700, color: "#0b8f6a" }}>
          🐾 PetHealth Lite
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/" style={estiloLink("/")}>
            Home
          </Link>
          <Link to="/pacientes" style={estiloLink("/pacientes")}>
            Pacientes
          </Link>
          <Link to="/consultas" style={estiloLink("/consultas")}>
            Consultas
          </Link>
          <Link to="/listagem" style={estiloLink("/listagem")}>
            Listagem
          </Link>
        </div>
      </div>
    </div>
  );
}