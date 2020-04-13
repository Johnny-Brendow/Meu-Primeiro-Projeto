import React,{Component,Fragment, createElement} from 'react';
import {StiledClientList,StyledUl,StyledLi,StyledP} from './style.js';
// import {resultado} from './Conect'
// import {obter1ClienteEAluguéis,obterTodosOsClientes} from './teste'
export default class ListaDeClientes extends Component {
componentDidMount=()=>{

// obterTodosOsClientes().then((resposta)=>{resposta.map(listarClientes)})
// obter1ClienteEAluguéis(1).then(function(resposta){
// console.log('Cliente :',resposta.Cliente.nome)
// console.log('Aluguéis desse cliente :',resposta.AluguéisDesseCliente)
// }).catch(function (error) {
// console.error('OPA', error)
// })


// async function listarClientes () {
// for (let i =0 ; i<10 ; i++)
// obter1ClienteEAluguéis(i).then(function(resposta){
// document.createElement(StyledLi)

// })
// }
    
// createLi(nome){ 
// const linha = document.createElement(StyledLi)
// linha.appendChild(nome)


}
render(){
        return (
            <Fragment>
        <StiledClientList>

                    <StyledP>Clientes</StyledP>
            <StyledUl id='lista'>
            {/* {Clientes.map(cliente=>{setTimeut(this.createLi(cliente.nome),2000)})} */}
            </StyledUl> 

        </StiledClientList>
        </Fragment>
        )
    }
    
};
