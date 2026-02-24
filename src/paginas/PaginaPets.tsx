// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const esquemaFormulario = z.object({
  nome: z.string().min(1, "Informe o nome do pet"),
  especie: z.string().min(1, "Informe a espécie"),
  raca: z.string().optional(),
  tutor: z.string().min(1, "Informe o nome do tutor"),
});

type DadosFormulario = z.infer<typeof esquemaFormulario>;

export default function PaginaPets() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DadosFormulario>({
    resolver: zodResolver(esquemaFormulario),
  });

  function cadastrar(dados: DadosFormulario) {
    // Pega lista atual do localStorage
    const listaSalva = localStorage.getItem("pets");

    let listaPets = [];

    if (listaSalva) {
      listaPets = JSON.parse(listaSalva);
    }

    // Cria novo objeto pet
    const novoPet = {
      id: Date.now(),
      nome: dados.nome,
      especie: dados.especie,
      raca: dados.raca,
      tutor: dados.tutor,
    };

    listaPets.push(novoPet);

    // Salva novamente no localStorage
    localStorage.setItem("pets", JSON.stringify(listaPets));

    alert("Pet cadastrado e salvo com sucesso!");
    reset();
  }

  return (
    <div className="caixa">
      <h2>Cadastro de Pacientes</h2>

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
    </div>
  );
}