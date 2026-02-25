// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const esquemaFormulario = z.object({
  nome: z.string().min(1, "Informe o nome do pet"),
  especie: z.string().min(1, "Informe a espécie"),
  raca: z.string().optional(),
  tutor: z.string().min(1, "Informe o nome do tutor"),
});

type DadosFormulario = z.infer<typeof esquemaFormulario>;

export default function PaginaPets() {
  const [listaPets, setListaPets] = useState<any[]>([]);
  const [mensagem, setMensagem] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DadosFormulario>({
    resolver: zodResolver(esquemaFormulario),
  });

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("pets");

    if (dadosSalvos) {
      setListaPets(JSON.parse(dadosSalvos));
    }
  }, []);

  function cadastrar(dados: DadosFormulario) {
    const novoPet = {
      id: Date.now(),
      nome: dados.nome,
      especie: dados.especie,
      raca: dados.raca,
      tutor: dados.tutor,
    };

    const novaLista = [...listaPets, novoPet];

    localStorage.setItem("pets", JSON.stringify(novaLista));
    setListaPets(novaLista);

    setMensagem("Pet cadastrado com sucesso!");
    reset();

    setTimeout(() => {
      setMensagem("");
    }, 2500);
  }

  return (
    <div className="caixa">
      <h2>Cadastro de Pacientes</h2>

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

      <form onSubmit={handleSubmit(cadastrar)}>
        <label>Nome do Pet</label>
        <input {...register("nome")} />
        {errors.nome && (
          <div style={{ color: "red" }}>{errors.nome.message}</div>
        )}

        <label>Espécie</label>
        <input {...register("especie")} />
        {errors.especie && (
          <div style={{ color: "red" }}>{errors.especie.message}</div>
        )}

        <label>Raça</label>
        <input {...register("raca")} />

        <label>Nome do Tutor</label>
        <input {...register("tutor")} />
        {errors.tutor && (
          <div style={{ color: "red" }}>{errors.tutor.message}</div>
        )}

        <button type="submit">Cadastrar</button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <h3>Pets já cadastrados</h3>

      {listaPets.length === 0 && <p>Nenhum pet cadastrado.</p>}

      {listaPets.map((pet) => (
        <div key={pet.id} style={{ marginBottom: "8px" }}>
          <strong>{pet.nome}</strong> - {pet.especie} - Tutor: {pet.tutor}
        </div>
      ))}
    </div>
  );
}