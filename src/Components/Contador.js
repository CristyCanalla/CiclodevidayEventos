import {useState} from 'react';

const Contador = () => {
  
    const [contador, setContador] = useState(0); 

    const sumarUno =()=>{
    setContador(contador +1)
    }
    
    const restarUno =()=>{
        setContador(contador -1)
        }

    const resetear =()=>{
    setContador(0)
            }
  return (
    <div>
        <h1> El contador esta :{contador} </h1>
        <button onClick={sumarUno} disabled={contador>=10}>Incrementar</button>
        <button onClick={restarUno} disabled={contador<=0}>Restar</button>
        <button onClick={resetear}>Resetear</button>
        </div>
  )
}

export default Contador