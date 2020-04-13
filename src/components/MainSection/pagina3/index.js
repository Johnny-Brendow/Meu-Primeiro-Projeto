import React,{ Component,Fragment} from 'react'
import DetalhesDeAlocação          from './detalhesDeAlocação'; 
import Info                        from './info'
import DadosDoCliente              from './dadosDoCliente'
import {Alinhamento,StyledButton,StyledBotãoAlugar,StyledDivInterna,StyledDiv} from './style';

export default class Pagina3 extends Component{
  
    render(){
       return(
         <Fragment>   
          <StyledDiv id='Tela_Alugar'>            
             <DadosDoCliente></DadosDoCliente>
             <DetalhesDeAlocação></DetalhesDeAlocação>
           
            
                          <Alinhamento top='43.5' right='20'>
                            <StyledButton type='submit' value='Desfazer'></StyledButton>         
                          </Alinhamento>
                            
                          <Alinhamento top='43.5' right='40'>
                            <StyledButton type='submit' value='Adicionar na Lista'></StyledButton>
                          </Alinhamento>

                          <Alinhamento top={0}  right={0}>
                            <StyledBotãoAlugar type='submit' value='Alugar'></StyledBotãoAlugar>
                          </Alinhamento>

                      <StyledDivInterna>
                        
                        <Info></Info>
                        <Info></Info>
                        <Info></Info>
                        
                      </StyledDivInterna>
             

           
           

           </StyledDiv>
         </Fragment>
       )
    }
  }