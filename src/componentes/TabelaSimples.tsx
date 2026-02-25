// Desenvolvido por Gustavo - PetHealth Lite - RPV 2026

type PropsTabela = {
  children: React.ReactNode;
};

export default function TabelaSimples(props: PropsTabela) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      {props.children}
    </table>
  );
}