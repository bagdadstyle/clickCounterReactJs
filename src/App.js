
import './App.css';
import HenryLogo from './images/HenryLogo.webp';
import Boton from './components/boton';
import Contador from './components/contador';
import { useState } from 'react'

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  }
  const reiniciarContador = () =>{
    setNumClicks(0)
  }
  return (
    <div className="App">
      <div className='logo-container'>
            <img className='logo'
            src={HenryLogo} 
            alt='logo de Henry' />
      </div>
     <div className='main-container'>
          <Contador 
          numClicks={numClicks}
          />
          <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
          />
          <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} 
          />
     </div>
    </div>
  );
}

export default App;
