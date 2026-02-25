// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { Link } from "react-router-dom";

export default function PaginaHome() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "44px", marginTop: "30px", marginBottom: "10px" }}>
        Bem-vindo ao <span style={{ color: "#0b8f6a" }}>PetHealth Lite</span>
      </h1>

      <p style={{ color: "#6b7280", marginTop: "0", marginBottom: "30px" }}>
        Gerencie seus pacientes e consultas veterinárias de forma simples, rápida e organizada.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <Link to="/pacientes" style={{ textDecoration: "none", color: "#111827" }}>
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "28px" }}></div>
            <h3 style={{ marginBottom: "6px" }}>Cadastrar Pet</h3>
            <p style={{ color: "#6b7280", marginTop: "0" }}>
              Registre novos pets e seus tutores no sistema.
            </p>
          </div>
        </Link>

        <Link to="/consultas" style={{ textDecoration: "none", color: "#111827" }}>
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "28px" }}></div>
            <h3 style={{ marginBottom: "6px" }}>Agendar Consulta</h3>
            <p style={{ color: "#6b7280", marginTop: "0" }}>
              Marque consultas veterinárias para seus pacientes.
            </p>
          </div>
        </Link>

        <Link to="/listagem" style={{ textDecoration: "none", color: "#111827" }}>
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "28px" }}></div>
            <h3 style={{ marginBottom: "6px" }}>Ver Pacientes</h3>
            <p style={{ color: "#6b7280", marginTop: "0" }}>
              Visualize todos os pacientes cadastrados.
            </p>
          </div>
        </Link>
      </div>

      <div style={{ marginTop: "26px", fontSize: "12px", color: "#6b7280" }}>
        Sistema desenvolvido por Gustavo
      </div>
    </div>
  );
}