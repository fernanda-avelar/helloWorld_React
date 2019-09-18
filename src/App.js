import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './componentes/Contador'
import Placar from './componentes/Placar'

const dados = {
  partida : {
    estadio: "Maracana/RJ",
    data:"18/08/2020",
    horario: "16:00"
  },
  casa: {
    nome:"Santos"
  },
  visitante: {
    nome:"Flamengo"
  }
}

function App() {

  return (
    <div>
      <div>
       <Contador/>
      </div>
      <div>
        {/* <Placar partida={dados.partida} casa={dados.casa} visitante={dados.visitante}/> */}
        <Placar {...dados}/>
      </div>
    </div>
    
  );
}

export default App;
