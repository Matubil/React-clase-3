//En los componentes de clases no se usan los hooks,
//Los hooks se hicieron justamente para poder hacer en los componentes funcionales lo mismo que en los componentes de clases
import { Component } from "react";

/* Vamos a usar el contructor, el manejo del estado en los componentes de clases es bastante distinto a los componentes funcionales,
en los componentes funcionales, cada vaariable de estado era una varibale independiente en general, en cambio en los componentes de estados (o de clase), el estado es un objeto JSON que siempre tiene ahi todas las variables, y ese objeto JSON lo vamos a definir en el constructor (ya esta definido en el Component), lo que vamos a hacer es redefinirle los datos que lleva aca dentro, eso generalmente se hace en el constructor
 */
class ContadorClase extends Component { //el constructor en la POO, la clase contador, te va a dejar hacer muchos componentes, cada vez que vos haces un new contador clase, estas instanciando un objeto de este tipo, cuando vos instancias un objeto de contador clase, se ejecuta el constructor.
    //la palabra constructor no tiene nombre, es una palabra reservada de js, y es el metodo que se te va a ejecutar al momento que crees un componente de este tipo, o sea es el primer metodo que se ejecuta, es como un metodo de inicializacion

    constructor(props) { //instancio 
        super(props);
        this.state = {
            contador: 0
        }
    }

    incrementar() {
        this.setState({ //se le pone setState porque lo hacemos es modificar una variable de estado, que le pasamos un objeto JSON
            //que tiene lo que le modificamos el estado
            contador: this.state.contador + 1
        })
    }

    decrementar() {
        if(this.state.contador > 0){
            this.setState({
                contador: this.state.contador - 1
            })
        }
    }

    reset() {
        this.setState({ //se le pone setState porque lo hacemos es modificar una variable de estado, que le pasamos un objeto JSON
            //que tiene lo que le modificamos el estado
            contador: 0
        })
    }

    render() {
        return (
            <div className="text-center border mt-3 p-2">
                <h4>Componente Contador De Clases</h4>
                <h3>{this.state.contador}</h3>
                <div>
                    {/* Se pone bind porque podemos tenerlo como una regla de los componentes de clases, cuando queres asociar un metodo de un componente de clase con un evento tenes que asociarlo con un bind para los componentes de clases, cule estas diciendo que cuando llame al metodo incrementar el this del metodo incrementar, sea el mismo this que en el momento que se esta llamando al metodo render*/}
                    <button className="btn btn-primary m-1" onClick={this.decrementar.bind(this)}>
                        -
                    </button>
                    <button className="btn btn-danger m-1" onClick={this.reset.bind(this)}>
                        Reset
                    </button>
                    <button className="btn btn-primary m-1" onClick={this.incrementar.bind(this)}>
                        +
                    </button>
                </div>
            </div>
        )
    }
}

export default ContadorClase;