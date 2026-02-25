// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const esquemaConsulta = z.object({
  petId: z.string().min(1, "Selecione um pet"),
  data: z.string().min(1, "Informe a data"),
  horario: z.string().min(1, "Informe o horário"),
  motivo: z.string().min(1, "Informe o motivo"),
});

type DadosConsulta = z.infer<typeof esquemaConsulta>;

export default function PaginaConsultas() {
  const medicoFixo = {
    nome: "Dr. Gustavo Barcelos",
    crmv: "12345",
    especialidade:
      "Clínica Geral Veterinária RPV Desenvolvimento de sistemas - 2026",
  };

  const [listaPets, setListaPets] = useState<any[]>([]);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const dados = localStorage.getItem("pets");
    if (dados) {
      setListaPets(JSON.parse(dados));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DadosConsulta>({
    resolver: zodResolver(esquemaConsulta),
  });

  function agendar(dados: DadosConsulta) {
    const consulta = {
      id: Date.now(),
      petId: dados.petId,
      data: dados.data,
      horario: dados.horario,
      motivo: dados.motivo,
      medico: medicoFixo,
    };

    const consultasSalvas = localStorage.getItem("consultas");
    let listaConsultas: any[] = [];

    if (consultasSalvas) {
      listaConsultas = JSON.parse(consultasSalvas);
    }

    listaConsultas.push(consulta);

    localStorage.setItem("consultas", JSON.stringify(listaConsultas));

    console.log("Consulta salva:", consulta);

    setMensagem("Consulta salva com sucesso!");
    reset();

    setTimeout(() => {
      setMensagem("");
    }, 2500);
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

        {mensagem !== "" && (
          <div
            style={{
              background: "#e8f6f1",
              border: "1px solid #0b8f6a",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "14px",
              color: "#0b8f6a",
              fontWeight: 700,
            }}
          >
            {mensagem}
          </div>
        )}

        <form onSubmit={handleSubmit(agendar)}>
          <label>Selecione o Pet</label>
          <select
            {...register("petId")}
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
          {errors.petId && (
            <div style={{ color: "red" }}>{errors.petId.message}</div>
          )}

          <label>Data</label>
          <input type="date" {...register("data")} />
          {errors.data && (
            <div style={{ color: "red" }}>{errors.data.message}</div>
          )}

          <label>Horário</label>
          <input type="time" {...register("horario")} />
          {errors.horario && (
            <div style={{ color: "red" }}>{errors.horario.message}</div>
          )}

          <label>Motivo</label>
          <input {...register("motivo")} />
          {errors.motivo && (
            <div style={{ color: "red" }}>{errors.motivo.message}</div>
          )}

          <button type="submit">Agendar</button>
        </form>
      </div>
    </div>
  );
}