import { useState, useEffect, useRef } from 'react';

import Escola from './escola';
import Aluno from './aluno';
import AlunosContextProvider from './alunos-ctx';

function App() {
  const [nomeDaEscola, setNomeDaEscola] = useState('');
  const [nomeDoAluno, setNomeDoAluno] = useState('');

  const [alunos, setAlunos] = useState([]);
  // const alunosAnterior = useRef(alunos);
  const alunoInputRef = useRef(null);

  const adicionarAluno = () => {
    // alunosAnterior.current = alunos;

    setAlunos([
      ...alunos,
      nomeDoAluno,
    ]);

    setNomeDoAluno('');
  };

  useEffect(() => {

  }, [alunos]);

  useEffect(() => {
    if (nomeDaEscola === 'Let\'s Code') {
      alunoInputRef.current.focus();
    }
  }, [nomeDaEscola]);

  return (
    <div>
      <div>
        <label htmlFor='nome-da-escola'>Nome da escola</label>
        <input
          id='nome-da-escola'
          value={nomeDaEscola}
          onChange={e => setNomeDaEscola(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='nome-do-aluno'>Nome do aluno</label>
        <input
          id='nome-do-aluno'
          value={nomeDoAluno}
          onChange={e => setNomeDoAluno(e.target.value)}
          ref={alunoInputRef}
        />
        <button onClick={adicionarAluno}>Adicionar aluno!</button>
      </div>

      <AlunosContextProvider>
        <Escola
          nome={nomeDaEscola}
          endereco="Rua foo, 123"
        />

        <Aluno nome="Ivirson" />
      </AlunosContextProvider>
      <Escola
          nome={nomeDaEscola}
          endereco="Rua foo, 123"
        />
    </div>
  );
}

export default App;
