import React,{Component,Fragment} from 'react';
import {StyledEditar,StyledBuutton} from './style.js';
export default class EditarCliente extends Component {
    render(){
        return (
        <Fragment>
           
            <StyledEditar>
              <StyledBuutton right='20' type='submit' value='Editar Informações'></StyledBuutton>
              <StyledBuutton right='60' type='submit' value='Editar Informações'></StyledBuutton>
            </StyledEditar>
          
        </Fragment>
        )
    }
    
};