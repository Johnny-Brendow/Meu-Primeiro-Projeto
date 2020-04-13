import React,{ Component} from 'react'
import {StyledMainDiv} from './style'
import ListaDeClientes from './ListaDeClientes'
import DetalhesDeAlocação from './DetalhesDeAlocação';
import SobreOCliente from './SobreOCliente';
import EditarCliente from './EditarCliente'
export default class Pagina4 extends Component{
    componentDidMount(){
        // obterClienteEAluguéis(1)
        // .then(function(resposta){
        // console.log('Cliente :',resposta.Cliente.nome)
        // console.log('Aluguéis desse cliente :',resposta.AluguéisDesseCliente)
        // }).catch(function (error) {
        // console.error('OPA', error)
        // })
    }
    render(){
       return(
         
           <StyledMainDiv id='pagina4'>
           <ListaDeClientes></ListaDeClientes>
           <SobreOCliente></SobreOCliente>
           <DetalhesDeAlocação></DetalhesDeAlocação>
           <EditarCliente></EditarCliente>
           </StyledMainDiv>
         
       )
    }
  }