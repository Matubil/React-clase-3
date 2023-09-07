import "bootstrap/dist/css/bootstrap.css";

function Cabecera({titulos}) { //de las propiedades del JSON elegis solo la propiedad titulos
    return(
            <header className="bg-dark text-light text-center p-3">
                {
                    titulos.map(
                            (titulo, index)=>(
                                    <h1 key={index}>{titulo}</h1> //le pone un index para no tener el warning, es mas que nada para que react identifique internamente el index
                                    //cuando lo escribimos asi el return es implicito
                                )
                            )
                }
            </header>
        )
}

// function Cabecera(props) { //!aca se le pasa un parametro JSON
//     return(
//             <header className="bg-dark text-light text-center p-3">
//                 {
//                     props.titulos.map(
//                             (titulo, index)=>(
//                                     <h1 key={index}>{titulo}</h1> //!le pone un index para no tener el warning, es mas que nada para que react identifique internamente el index
                                     //!cuando lo escribimos asi el return es implicito
//                                 )
//                             )
//                 }
//             </header>
//         )
// }

// function Cabecera(props) {
//     return(
//             <header className="bg-dark text-light text-center p-3">
//                 {
//                     props.titulos.map(
//                             (titulo, index)=>{
//                                    return <h1 key={index}>{titulo}</h1> 
//                                 }//de esta manera el return no es implicito
//                             )
//                 }
//             </header>
//         )
// }


// function Cabecera(props) {
//     return(
//             <header className="bg-dark text-light text-center p-3">
//                 {
//                     props.titulos.map(
//                             (titulo, index)=>{
//                                     switch(index){
//                                         case 0 : return <h1 key={index}>{titulo}</h1> 
//                                         case 1 : return <h2 key={index}>{titulo}</h2> 
//                                         case 2 : return <h3 key={index}>{titulo}</h3> 
//                                     }
//                                     return <h4 key={index}>{titulo}</h4> 
//                                 }
//                             )
//                 }
//             </header>
//         )
// }

export default Cabecera;