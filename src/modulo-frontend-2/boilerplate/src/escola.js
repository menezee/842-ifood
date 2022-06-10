import { useContext } from "react";
import { AlunosContext } from "./alunos-ctx";

function Escola({ nome = 'Sem nome', endereco }) {
  const { alunos } = useContext(AlunosContext);

  return (
    <section>
      <h1>{nome}</h1>

      <span>Endereço: { endereco }</span><br />
      <span>Foco: Programação</span><br />

      <div>
        <section style={{ border: '1px solid red', }}>
          Alunos:
          {
            alunos.map(aluno => (
              <li key={aluno}>{ aluno }</li>
            ))
          }
        </section>
      </div>
    </section>
  );
}

export default Escola;
