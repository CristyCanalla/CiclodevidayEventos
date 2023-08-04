import {useState} from 'react'

const FormularioRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log('Nombre:', nombre);
     console.log('Email:', email);
     console.log('Contraseña:', contrasena);
    }

  return (
    <form onSubmit={handleSubmit}>
    <input 
    type='text'
    placeholder='Nombre'
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    />
    <input 
    type='email'
    placeholder='Email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <input 
    type='password'
    placeholder='Contraseña'
    value={contrasena}
    onChange={(e) => setContrasena(e.target.value)}
    />
    <button type='submit'>Regristrarse</button>
    </form>
  )
}

export default FormularioRegistro