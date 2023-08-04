import {useState} from 'react'

const MouseYTexto = () => {

    const [showInfo, setShowInfo] = useState(false);

    const handleMouseOver=()=>{
        setShowInfo(true)
    }

    const handleMouseOut=()=>{
        setShowInfo(false)
    }
  return (

    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <h2>Informacion secreta</h2>
        {showInfo && <p>Esta es la información oculta</p>}
    </div>
  )
}

export default MouseYTexto;