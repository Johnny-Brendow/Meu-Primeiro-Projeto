import React,{Fragment} from 'react'
import {StyledInfo,StyledDivInfo} from './style'
export default class Info extends React.Component {
    render(){
        return(
            <Fragment>
                <StyledInfo>
            <StyledDivInfo>
            <p>Modelo:</p>
            <input type='text' disabled></input>
            </StyledDivInfo>

            <StyledDivInfo>
            <p>Tamanho:</p>
            <input type='text' disabled></input>
            </StyledDivInfo>

            <StyledDivInfo>
            <p>Data </p>
            <input type='text' disabled></input>
            </StyledDivInfo>

            <StyledDivInfo>
            <p>Hora</p>
            <input type='text' disabled></input>
            </StyledDivInfo>

            <StyledDivInfo>
            <p>Quantidade:</p>
            <input type='text' disabled></input>
            </StyledDivInfo>


            </StyledInfo>
            </Fragment>
        )
    }
};
