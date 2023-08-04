import {useState} from 'react'

const Texto = () => {

    const[mostrarTexto, setMostrarTexto] = useState(false);
    
   const toggleTexto = ()=>{
    setMostrarTexto(!mostrarTexto)
   }


  return (
    <div>
        <button onClick={toggleTexto}> Mostrar / Ocultar</button>
        {mostrarTexto && <p>Aca esta todo el contenido</p>}
    </div>
  )
}

export default Texto