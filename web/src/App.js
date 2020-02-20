import React, { useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import Devitem from './components/Devitem';


// componente : bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicacao
// estado : informacoes mantidas pelo componentes (lembrar: imutabilidade)
// propriedade : informacoes que um componente PAI passa para o componente FILHO

function App() {
  const [devs, setDevs] = useState([]);

  

  

  useEffect(()  => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    

    const response = await api.post('/devs', data)

    
    
    setDevs([...devs, response.data]);
  }
  

  return (
   <div id="app">
     <aside>
      <strong>Cadastrar</strong>
      <DevForm onSubmit={handleAddDev}/>
     </aside>

     <main>
      <ul>
        {devs.map(dev => (
          <Devitem key={dev._id} dev={dev}/>
        ))} 
      </ul>
     </main>
   </div>
  );

}
export default App;
