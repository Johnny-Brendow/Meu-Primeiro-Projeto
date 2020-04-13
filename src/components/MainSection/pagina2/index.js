import React,{ Component} from 'react'
import styledComponents from 'styled-components'
const HoverText = styledComponents.button
`
border-radius:20px;
color:#0426E8 ;
:hover{
  border-top-right-radius: 0px ;
  transition: 1s;
  color: #FFAA00;
  cursor: pointer;
  background-color:rgb(71, 8, 100);
};
`



class MyButton extends React.Component{
  render(){
      return <HoverText className="botõesPagina2">Calcular</HoverText>
  }
}
export default class Pagina2 extends Component{
  render(){
       return(
         <>
         <div id='pagina2'>
           <p>Calculo de Valores de Barracas :</p>
           <input id='numeroDeBarracas'></input>
           <MyButton />
         </div>
         </>
       )
    }
  
  }