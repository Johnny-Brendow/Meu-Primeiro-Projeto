import React,{Component,Fragment} from 'react';
import {StyledDivInterna} from './style.js';
import Info from '../pagina3/info'
export default class DetalhesDeAlocação extends Component {
    render(){
        return (
        <Fragment>
           
            <StyledDivInterna>
                        
                        <Info></Info>
                        <Info></Info>
                        <Info></Info>
                        
                        
            </StyledDivInterna>
          
        </Fragment>
        )
    }
    
};