// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { Link } from "react-router-dom";

export default function BarraTopo() {
  return (
    <div className="topo">
      <div className="topo-miolo">
        <div style={{ fontWeight: 700, color: "#0b8f6a" }}> PetHealth Lite</div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/pacientes">Pacientes</Link>
          <Link to="/consultas">Consultas</Link>
          <Link to="/listagem">Listagem</Link>
        </div>
      </div>
    </div>
  );
}