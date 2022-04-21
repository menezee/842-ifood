import { useState } from "react";
import { createContext } from "react";

export const AlunosContext = createContext();

function AlunosContextProvider({ children }) {
  const [alunos, setAlunos] = useState(['Erich']);

  const adicionarAluno = aluno => {
    setAlunos([
      ...alunos,
      aluno,
    ]);
  };

  return (
    <AlunosContext.Provider value={{ alunos, adicionarAluno }}>
      { children }
    </AlunosContext.Provider>
  );
}

export default AlunosContextProvider;
