// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

type PropsCartao = {
  children: React.ReactNode;
};

export default function Cartao(props: PropsCartao) {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
      }}
    >
      {props.children}
    </div>
  );
}