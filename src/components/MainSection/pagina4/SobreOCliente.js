import React,{Component,Fragment} from 'react';
import {StyledSobreOClienteDiv,StyledBloco,StyledP,StyledA,StyledInput} from './style.js';
export default class SobreOCliente extends Component {
    render(){
        return (
        <StyledSobreOClienteDiv>
               <StyledBloco>
                   <StyledP>Nome:</StyledP>
                   <StyledInput type='text'></StyledInput>
               </StyledBloco>
               <StyledBloco>
                   <StyledP>Empresa:</StyledP>
                   <StyledInput type='text'></StyledInput>
               </StyledBloco>
               
               <StyledBloco>
                   <StyledP> Cpf :</StyledP>
                   <StyledInput type='text'></StyledInput>
               </StyledBloco>
               
               <StyledBloco>
                   <StyledP>Telefone :</StyledP>
                   <StyledInput type='text'></StyledInput>
               </StyledBloco>

               <StyledBloco>
                   <StyledP>Celular:</StyledP>
                   <StyledInput type='text'></StyledInput>
               </StyledBloco>

               <StyledBloco>
                   <StyledP>CNPJ:</StyledP>
                   <StyledInput type='text'></StyledInput>
               </StyledBloco>

               <StyledBloco>
                   <StyledP>Site:</StyledP>
                   <StyledA href='#'>Acessar</StyledA>
               </StyledBloco>

        </StyledSobreOClienteDiv>
        )
    }
    
};
