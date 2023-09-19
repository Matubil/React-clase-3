import "bootstrap/dist/css/bootstrap.css";
import { Component } from "react";
import PropTypes from "prop-types"


//Componente de clase
class FichaPersona extends Component {
    render() {
        return (
            <div className="border mt-3 p-2 text-center">
                <h4>Ficha Persona</h4> 
                <div>
                    <img src={this.props.imagen} 
                        style={{width: "250px", height: "250px"}}  
                        alt="Imagen Persona" />
                </div>
                <h5>Nombre: {this.props.nombre}</h5> 
                <h5>Apellido: {this.props.apellido}</h5> 
                <h5>Edad: {this.props.edad}</h5> 
                <h5>Imagen: {this.props.nombre}</h5> 
            </div>
        )
    }
}

//Atencion p en minusculas
//Esto sirve para dar la informacion de los tipos que tiene que tener los PropTypes o cada una de las variables
FichaPersona.propTypes = { //creas un objeto Json con las propiedades que le tenes que pasar, incluso podes ponerle validaciones
    nombre: PropTypes.string.isRequired, //incluso podes indicar que es requerido con PropTypes.string.isRequired
    apellido: PropTypes.string.isRequired,
    edad: PropTypes.number,
    imagen: PropTypes.string
}

export default FichaPersona