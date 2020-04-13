import styled from 'styled-components'

 export const StyledDisponibilidadeDiv = styled.div`
background-image:radial-gradient(#7740A2, #60298B,#531e7c);
width: 96.5%;
height: 30%;
position: absolute;
padding:20px;
border-radius: 20px;
max-height: 700px;
border-style:solid;
border-color:#230d33;
border-width:6px;
flex-direction: row;
flex-wrap: wrap;
`
 export const StyledSelect = styled.select`
border-radius:20px;
background-image:linear-gradient(to right, #5F13B2,#BC35FF,#feb124);
background-size:200%;
width:150px;
margin-top:41px;
margin-right:50px;
padding:10px;
border-color:#230d33;
box-shadow: 2px 5px 5px rgba(0,0,0,0.3);
:hover{
    transition:0.5s;
    background-position:right;
    cursor:pointer;
    border-bottom-left-radius:0px;
    border-bottom-right-radius:0px;
}
`
 export const StyledOption = styled.option`
background-color:orange;
font-style:underline;
color:purple;
text-align:center;
`
 export const StyledCalendarDiv  = styled.div`
 position:absolute;
 margin:20px;
 right:230px;
 top:40px;
 `
 export const StyledInput1 = styled.input`
 position:absolute;
 right:1%;
 top:15px;
 padding:5px;
 border-color:rgba(0,0,0,0.5);
 color:black;
 `
 export const StyledInput2 = styled.input`
 position:absolute;
 top:35%;
 right:1%;
 padding:5px;
 border-color:rgba(0,0,0,0.5);
 color:black;
 `
 export const StyledInputResultado = styled.input`
 position:absolute;
 right:0px;
 bottom:0px;
 padding:10px;
 border-bottom-right-radius:16px;
 border-top-left-radius:16px;
 background-color:#ffdbbd;
 border-color:rgba(0,0,0,0.5);
 color:black;
 `
 