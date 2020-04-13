import React,{ Component} from 'react'
import { Img , ListaDeItens } from './style.js'
export class Bloco  extends Component{
    render(){
    return (
      
            <ListaDeItens id ={this.props.nomeBloco}>
             
            <Img alt='jpeg' src={this.props.imagem}></Img>
            
            <p>{this.props.frase}</p>
            
            <input className='texto'type='text' id={this.props.caixaID} placeholder="Digite o Novo Preço"></input>
            
            <input className='botao'type="submit"></input>
            
            
            </ListaDeItens>
    )
    }
  }
export class Bloco2 extends Component {
    render(){
      return(
      <ListaDeItens id ={this.props.nomeBloco}>
             
        <Img alt='jpeg' src={this.props.imagem}></Img>
        
        <p>{this.props.frase}</p>
        
        <input disabled className='texto'type='text' id={this.props.caixaID2} placeholder="     (Preço Registrado)"></input>
        
        </ListaDeItens>
        )
    }
  }