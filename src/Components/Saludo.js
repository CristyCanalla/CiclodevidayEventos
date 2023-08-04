import '../Components/Saludo.css';

function Saludo({nombre}){

    return(
        <div className="saludo">
         <h2>Hola {nombre} !</h2>
        </div>
    )
}
export default Saludo;