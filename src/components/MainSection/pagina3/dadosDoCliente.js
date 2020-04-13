import React,{ Component,Fragment} from 'react'
import { StyledItemDiv,StyledInput,StyledP} from './style';

export default class DadosDoCliente extends Component {
    render(){
        return(
            <Fragment>
           <StyledItemDiv> 
                    <StyledP>Nome do Cliente :</StyledP>
              <StyledInput placeholder='dadada'></StyledInput>
           </StyledItemDiv>

           <StyledItemDiv> 
                  <StyledP>Cpf do Cliente :</StyledP>
             <StyledInput placeholder='dadada'></StyledInput>
           </StyledItemDiv> 

          <StyledItemDiv>
                 <StyledP>Telefone do Cliente :</StyledP>
             <StyledInput placeholder='dadada'></StyledInput>
          </StyledItemDiv>

          <StyledItemDiv>
                  <StyledP>Celular do Cliente :</StyledP>
             <StyledInput placeholder='dadada'></StyledInput>
          </StyledItemDiv> 

          <StyledItemDiv>
                   <StyledP>Nome da Empresa :</StyledP>
             <StyledInput placeholder='dadada'></StyledInput>
          </StyledItemDiv>

          <StyledItemDiv>
                    <StyledP>CNPJ da Empresa :</StyledP>
             <StyledInput placeholder='dadada'></StyledInput>
          </StyledItemDiv>

          <StyledItemDiv>
                     <StyledP>Site da Empresa :</StyledP>
             <StyledInput placeholder='opcional'></StyledInput>
          </StyledItemDiv>
            </Fragment>
        )
    }
};
