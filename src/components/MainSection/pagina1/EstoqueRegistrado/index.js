import React from 'react'
import {StyledDisponibilidadeDiv,StyledConfeccionadasDiv,StyledSelect,StyledOption,StyledCalendarDiv,StyledInput1,StyledInput2,StyledInputResultado} from './style';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';

export default class AlugadasDisponiveis extends React.Component{
 constructor(props) {
   super(props)
   this.state={
     startDate:null,
     endDate:null,
   }
 }             
    render(){
       return(
         <div id='pagina1'>
                  <StyledDisponibilidadeDiv>
                            
                            <StyledSelect >
                              <StyledOption disabled selected hidden>Estado</StyledOption>
                              <StyledOption>Disponivel</StyledOption>
                              <StyledOption>Alugada</StyledOption>
                              </StyledSelect>

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
                  <StyledInput1 id='1' placeholder='Hora Inicial'></StyledInput1>
                  <StyledInput2 id='2' placeholder='Hora final'></StyledInput2>



                  <StyledInputResultado disabled placeholder='Nº Disponivel'></StyledInputResultado>
                  </StyledDisponibilidadeDiv>
                            


                  
         </div>
       )
    }
  }