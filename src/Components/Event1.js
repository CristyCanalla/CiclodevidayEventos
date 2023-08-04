import React from 'react'

const Event1 = () => {

  const handleClick=()=>{
    alert('Me hiciste click')
  }

  return (
    <div>
        <button onClick={handleClick}>Haz click</button>
    </div>
  )
}

export default Event1