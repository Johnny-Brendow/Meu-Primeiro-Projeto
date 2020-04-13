import React,{Fragment} from 'react'
import AlugadasDisponiveis from './EstoqueRegistrado/index.js'
import RegistrarNovaBarraca from './RegistrarNoEstoque/index.js'
export default class Pagina1 extends React.Component{
render(){
    return(
        <Fragment>
        <AlugadasDisponiveis  />
        <RegistrarNovaBarraca />
        </Fragment>
        )
}
}