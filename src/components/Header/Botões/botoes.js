import {StyledButton} from './style';
import React,{ Component } from 'react';
export default class MyButton extends Component{
    constructor(props){
        super(props)
        this.state={
            cordeFundo:'StyledButton.bind.(background-color)',
        }
    }
    render(){
        return <StyledButton className="botõesHeader" onClick={()=>{this.props.handleClick(this.props.label)}} href={this.props.link}>{this.props.text}</StyledButton>
    }
}
