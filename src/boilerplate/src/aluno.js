import { useContext } from "react";
import { AlunosContext } from "./alunos-ctx";

function Aluno({ nome }) {
  const { alunos, adicionarAluno } = useContext(AlunosContext);

  return (
    <div>
      <button onClick={() => {
        adicionarAluno('Novo aluno');
      }}>Adicionar!</button>
      Aluno: {nome}<br />
      <h1>Minha lista de colegas:</h1>
      <ul>
        {
          alunos.map(aluno => (
            <li>{ aluno }</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Aluno;
