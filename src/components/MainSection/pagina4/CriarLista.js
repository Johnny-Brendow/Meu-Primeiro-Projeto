import {Clientes, Aluguéis} from './Clientes'
import react,{Component,Fragment} from 'react'
export default class criarLista extends Component {
    constructor(){
        super()
        const nomesClientes = Clientes.map((cliente)=>{return cliente.nome})
        console.log(nomesClientes)
        this.state = {
            clientes : {nomesClientes}
        }
    }
    render(){
        console.log(this.state.clientes)
        return(<h1>
fuck
        </h1>)
    
    }
};
