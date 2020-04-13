import React from 'react'
import {StyledConfeccionadasDiv} from './style.js'
export default class RegistrarNovaBarraca extends React.Component{
    render(){
    return(
<StyledConfeccionadasDiv>
<p>aqui ficarão o numero de barracas em produção , com modelo e tamanho 
  , juntamente com uma data estimada de produção e chegada de cada uma ,
   e tambem haverá uma area para confirmar a chegada destes itens , 
depois de confirmada a chegada destes itens eles serão adicionados 
ao banco de dados com o estado inicial de "disponivel full Time" 
(isto vai sendo modificado com o tempo na aba "Alugar" que pega estes 
itens disponiveis em certos horarios de certas datas e colocam eles como
 "alugados" ) devo me lembrar que existe um intervalo entre uma feira
  ser desmontada e outra pois leva um tempo , então é necessario um
   delay do termino de um horario de alocação para a efetiva
    Disponibilidade de alocação para outra pessoa . Sendo assim uma 
    pessoa não pode alugar uma barraca fica disponivel as 13:00 as 13:01  </p>




</StyledConfeccionadasDiv>)


}}