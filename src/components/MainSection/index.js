import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Pagina1 from './pagina1/index';
import Pagina2 from './pagina2/index';
import Pagina3 from './pagina3/index';
import Pagina4 from './pagina4/index';
import Pagina5 from './pagina5/index';
import { StyledSection } from './style'
    
 export default class MainSection extends Component{
    render = () =>{
                    return(
                            <StyledSection id='section1'>    
                            <Switch>
                                    <Route path="/pagina1" component={Pagina1}></Route>
                                    <Route path="/pagina2" component={Pagina2}></Route>
                                    <Route path="/pagina3" component={Pagina3}></Route>
                                    <Route path="/pagina4" component={Pagina4}></Route>
                                    <Route path="/pagina5" component={Pagina5}></Route>
                            </Switch>
                            </StyledSection>
                          )
                  }
}
  