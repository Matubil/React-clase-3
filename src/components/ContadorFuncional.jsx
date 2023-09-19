import { useState } from "react" /*El use state es un hook 

Este es un componente funcional*/

function ContadorFuncional (props){
    console.log("Creando Componente ContadorFuncional")
    // let contador = 0; /*las variables que quiero que se actualicen, voy a necesitar hacerle hooks, asi que no se declaran asi*/ 
    let [contador, setContador] = useState(0); //el setContador sirve para que se vuelva a refrescar el valor
    //Los hooks se los reconoce por los use
    return(
        <div className="border mt-3 text-center p-2">
            <h4>Contador Funcional</h4>
            <h3>{contador}</h3>
            <div>
                {/* <button onClick={()=>{alert("Hola")}} /*comunmente se le pone onClick y una funcion flecha que haga un alert para ver si funca
                    className="btn btn-primary m-1">-</button> */}
                <button className="btn btn-primary m-1"
                        onClick={()=>{setContador(contador-1)}}>-</button>
                <button className="btn btn-danger m-1"
                    onClick={()=>{setContador(0)}}>Reset</button>
                <button className="btn btn-primary m-1"
                        onClick={()=>{setContador(contador+1)}}>+</button>
            </div>
        </div> 
    )
}

export default ContadorFuncional