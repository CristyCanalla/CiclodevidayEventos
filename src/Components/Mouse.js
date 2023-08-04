import {useState} from 'react'

const Mouse = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver=()=>{
        setIsHovered(true)
    }

    const handleMouseOut=()=>{
        setIsHovered(false)
    }

    const containerStyle ={
      padding: '10px',
      backgroundColor: isHovered ? 'blue' : 'yellow', 
    };

  return (

    <div style={containerStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
     <h2>MouseOver & MouseOut</h2>

    </div>
  )
}

export default Mouse