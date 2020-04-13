import React,{ Component, Fragment} from 'react'
import {ValoresRegistrados,AtualizarValores,StyledH1,Footer} from './style.js'
import { Bloco,Bloco2} from './blocos'

export default class Pagina5 extends Component{

    render(){
       return(
        <Fragment >
          <div id='pagina5'>
        <AtualizarValores   id='AtualizarValores'   >
        <StyledH1>Atualizar preços de produto </StyledH1>
          <Bloco nomeBloco={'Item1'} frase={'Nome do Produto'} caixaID={'1'} caixaID2={'1'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco>
          <Bloco nomeBloco={'Item2'} frase={'Nome do Produto'} caixaID={'2'} caixaID2={'2'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco>
          <Bloco nomeBloco={'Item3'} frase={'Nome do Produto'} caixaID={'3'} caixaID2={'3'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco>
          <Bloco nomeBloco={'Item4'} frase={'Nome do Produto'} caixaID={'4'} caixaID2={'4'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco>
          <Bloco nomeBloco={'Item5'} frase={'Nome do Produto'} caixaID={'5'} caixaID2={'5'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco>
          <Footer>Adicionar Novo Valor<img alt='iconeADD'src='https://image.flaticon.com/icons/svg/61/61183.svg'></img></Footer>
        </AtualizarValores> 
        <ValoresRegistrados id ='ValoresRegistrados'>
        <StyledH1>Preços Atuais Registrados</StyledH1>
        <Bloco2 nomeBloco={'Item1'} frase={'Nome do Produto'} caixaID={'1'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco2>
        <Bloco2 nomeBloco={'Item2'} frase={'Nome do Produto'} caixaID={'2'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco2>
        <Bloco2 nomeBloco={'Item3'} frase={'Nome do Produto'} caixaID={'3'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco2>
        <Bloco2 nomeBloco={'Item4'} frase={'Nome do Produto'} caixaID={'4'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco2>
        <Bloco2 nomeBloco={'Item5'} frase={'Nome do Produto'} caixaID={'5'} imagem={'https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png'}></Bloco2>
        </ValoresRegistrados>
        </div>
       </Fragment>
       )
       }
       }

       
    