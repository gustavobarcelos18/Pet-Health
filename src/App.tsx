// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026
import { Routes, Route } from "react-router-dom";
import BarraTopo from "./componentes/BarraTopo";
import PaginaHome from "./paginas/PaginaHome";
import PaginaPets from "./paginas/PaginaPets";
import PaginaConsultas from "./paginas/PaginaConsultas";
import PaginaListagem from "./paginas/PaginaListagem";

export default function App() {
  return (
    <div>
      <BarraTopo />

      <div className="conteudo">
        <Routes>
          <Route path="/" element={<PaginaHome />} />
          <Route path="/pacientes" element={<PaginaPets />} />
          <Route path="/consultas" element={<PaginaConsultas />} />
          <Route path="/listagem" element={<PaginaListagem />} />
        </Routes>
      </div>
    </div>
  );
}