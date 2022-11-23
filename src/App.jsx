// css
import './App.css';

// React
import { useState } from 'react';

// components
import Form from './components/Form';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Prevencoes from './components/Prevencoes';

const stages = [
  {id: 1, name: "inicio"},
  {id: 2, name: "prevencoes"},
  {id: 3, name: "atendimento"}
];

function App() {
  const [appStage, setAppStage] = useState(stages[0].name);

  const navegateInicio = () => {
    setAppStage(stages[0].name);
  }

  const navegatePrevencoes = () => {
    setAppStage(stages[1].name);
  }

  const navegateAtendimento = () => {
    setAppStage(stages[2].name);
  }

  return (
    <div className="App">
      <Header navegateInicio={navegateInicio} navegatePrevencoes={navegatePrevencoes} navegateAtendimento={navegateAtendimento} />
      {appStage === "inicio" && <Inicio />}
      {appStage === "prevencoes" && <Prevencoes />}
      {appStage === "atendimento" && <Form />}
    </div>
  );
}

export default App;
