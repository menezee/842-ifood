import ItensClient from './clients/itens';
import { useEffect, useState } from 'react';
import Item from './components/item';

function App() {
  const [itens, setItens] = useState([]);
  
  useEffect(() => {
    (async () => {
      const itens = await ItensClient.fetchItens();
      setItens(itens);
    })();
  }, []);
  
  return (
    <ol>
      {
        itens.map((item, idx) => (
          <li key={idx}>
            <Item
              titulo={item.titulo}
              quantidade={item.quantidade}
              image={item.image}
            />
          </li>
        ))
      }
    </ol>
  );
}

export default App;
