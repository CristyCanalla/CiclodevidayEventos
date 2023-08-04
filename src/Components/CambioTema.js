import {useState} from 'react'

const CambioTema = () => {
  const [tema, setTema] = useState('claro');

  const cambiarTema = () =>{
   setTema(tema === 'claro' ? 'oscuro' : 'claro');
  }
  return (
    <div>
        <h2>Tema:{tema}</h2>
        <button onClick={cambiarTema}>Cambiar</button>
    </div>
  )
}

export default CambioTema