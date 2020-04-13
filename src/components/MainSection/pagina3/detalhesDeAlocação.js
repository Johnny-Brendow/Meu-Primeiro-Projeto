import React,{ Component,Fragment} from 'react'
import { Alinhamento,StyledOption,StyledSelect,StyledInput,StyledP} from './style';
import { StyledCalendarDiv,StyledInput1,StyledInput2,StyledInputResultado} from '../pagina1/EstoqueRegistrado/style';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
export default class DetalhesDeAlocação extends Component {
    constructor(props) {
        super(props)
        this.state={
          startDate:null,
          endDate:null,
        }
      }             
    render(){
        return(
            <Fragment> 
            
             <Alinhamento top={11}  right={35}>
                            <StyledSelect >
                              <StyledOption disabled selected hidden>Modelo</StyledOption>
                              <StyledOption>Marrom</StyledOption>
                              <StyledOption>Verde e Branca</StyledOption>
                            </StyledSelect>

                            <StyledSelect >
                              <StyledOption disabled selected hidden>Tamanho</StyledOption>
                              <StyledOption>1.5 x 1.5</StyledOption>
                              <StyledOption>2 x 2</StyledOption>
                            </StyledSelect>

             <StyledP id='1'>Quantidade :</StyledP>
             <StyledInput placeholder='dadada'></StyledInput>

            </Alinhamento>
                            <StyledCalendarDiv id='calendario'>
                                          <DateRangePicker
                                          startDate={this.state.startDate} 
                                          startDateId="Inicio" 
                                          endDate={this.state.endDate} 
                                          endDateId="Termino" 
                                          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                                          focusedInput={this.state.focusedInput} 
                                          onFocusChange={focusedInput => this.setState({ focusedInput })}/>
                            </StyledCalendarDiv>
      
                              <Alinhamento top={25}  right={25}>
                                <StyledInput1 id='1' placeholder='Hora Inicial'></StyledInput1>
                              </Alinhamento>

                              <Alinhamento top={27.79} right={10}>
                                <StyledInput2 id='2' placeholder='Hora final'></StyledInput2>
                              </Alinhamento>

                            <Alinhamento top='50' right='0'>
                              <StyledInputResultado disabled placeholder='Nº Disponivel'></StyledInputResultado>
                            </Alinhamento>
                    
                            </Fragment>)
    }
};