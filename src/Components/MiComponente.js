import React from 'react'


const MiComponente = ({imagen, nombre, edad}) => {
  return (
    <div>
      <img src={imagen} width="200px" height="200px" alt='img1'/>
      <h2> Mi nombre es: {nombre} </h2>
        <p>Tengo de edad: {edad} </p>
      
    </div>
  )
}

export default MiComponente