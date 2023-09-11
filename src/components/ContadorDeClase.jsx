//En los componentes de clases no se usan los hooks,
//Los hooks se hicieron justamente para poder hacer en los componentes funcionales lo mismo que en los componentes de clases
import {Component} from "react";

/* Vamos a usar el contructor, el manejo del estado en los componentes de clases es bastante distinto a los componentes funcionales,
en los componentes funcionales, cada vaariable de estado era una varibale independiente en general, en cambio en los componentes de estados (o de clase), el estado es un objeto JSON que siempre tiene ahi todas las variables, y ese objeto JSON lo vamos a definir en el constructor (ya esta definido en el Component), lo que vamos a hacer es redefinirle los datos que lleva aca dentro, eso generalmente se hace en el constructor
 */
class ContadorDeClase extends Component { //el constructor en la POO, la clase contador, te va a dejar hacer muchos componentes, cada vez que vos haces un new contador clase, estas instanciando un objeto de este tipo, cuando vos instancias un objeto de contador clase, se ejecuta el constructor.
//la palabra constructor no tiene nombre, es una palabra reservada de js, y es el metodo que se te va a ejecutar al momento que crees un componente de este tipo, o sea es el primer metodo que se ejecuta, es como un metodo de inicializacion

    constructor(props){ //instancio 
        super(props);
        this.state = {
            contador : 0
        }
    }

    incrementar(){

    }
    decrementar(){
        
    }
    reset(){
        
    }
    render(){
        return(
            <div className="text-center border mt-3 p-2">                
                    <h4>Componente Contador De Clases</h4>
                    <h3>{this.state.contador}</h3>
                    <div>
                        <button className="btn btn-primary m-1">-</button>
                        <button className="btn btn-danger m-1">Reset</button>
                        <button className="btn btn-primary m-1">+</button>
                    </div>
            </div>
        )
    }
}

export default ContadorDeClase;