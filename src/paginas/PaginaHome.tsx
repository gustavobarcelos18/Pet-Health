// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026
import { Link } from "react-router-dom";

export default function PaginaHome() {
  return (
    <div className="caixa">
      <h2>Home</h2>
      <p>Escolha uma opção:</p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Link to="/pacientes">
          <button>Cadastro de Pacientes</button>
        </Link>

        <Link to="/consultas">
          <button>Agendar Consulta</button>
        </Link>

        <Link to="/listagem">
          <button>Ver Listagem</button>
        </Link>
      </div>
    </div>
  );
}