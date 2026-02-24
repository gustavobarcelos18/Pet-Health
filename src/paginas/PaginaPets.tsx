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
    defaultValues: {
      nome: "",
      especie: "",
      raca: "",
      tutor: "",
    },
  });

  function cadastrar(dados: DadosFormulario) {
    console.log("Cadastro validado (ainda sem salvar):", dados);
    alert("Cadastro validado com sucesso!");
    reset();
  }

  return (
    <div className="caixa">
      <h2>Cadastro de Pacientes</h2>

      <form onSubmit={handleSubmit(cadastrar)}>
        <label>Nome do Pet</label>
        <input {...register("nome")} />
        {errors.nome && (
          <div style={{ color: "red", marginTop: "-8px", marginBottom: "10px" }}>
            {errors.nome.message}
          </div>
        )}

        <label>Espécie</label>
        <input {...register("especie")} />
        {errors.especie && (
          <div style={{ color: "red", marginTop: "-8px", marginBottom: "10px" }}>
            {errors.especie.message}
          </div>
        )}

        <label>Raça</label>
        <input {...register("raca")} />

        <label>Nome do Tutor</label>
        <input {...register("tutor")} />
        {errors.tutor && (
          <div style={{ color: "red", marginTop: "-8px", marginBottom: "10px" }}>
            {errors.tutor.message}
          </div>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}