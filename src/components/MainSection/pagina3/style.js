import styled from 'styled-components'

export const StyledDiv = styled.div`
background-image:radial-gradient(#7740A2, #60298B,#531e7c);
width: 95%;
height: 95%;
position: absolute;
right:28px;
left:28px;
padding:20px;
border-radius: 20px;
max-height: 700px;
border-style:solid;
border-color:#230d33;
border-width:6px;
flex-direction: row;
flex-wrap: wrap;
margin:auto;
`
export const StyledP = styled.p`
 margin-top:2px;
 text-align:center;
 position:relative;
 color:orange;
 
 `
export const StyledInput = styled.input`
 position:relative;
 padding:0px 5px;
 border-color:rgba(0,0,0,0.5);
 color:black;
 margin-left:50%;
 transform:translate(-50% , -25%);

 `
export const StyledItemDiv = styled.div`
position:relative;
background-color : transparent;
width:300px;
height:70px;
border-radius:50px;
border-color:black;
margin-bottom:3px;
box-shadow:2px 2px 2px rgba(0,0,0,0.3);
 `
  export const StyledSelect = styled.select`
  border-radius:20px;
  background-image:linear-gradient(to right,#5d2687,#BC35FF,#feb124);
  background-size:250%;
  position:relative;
  color:orange;
  width:150px;
  padding:10px;
  border:none;
  box-shadow: 2px 5px 5px rgba(0,0,0,0.3);
  margin-left:25px;
  transition:1s;
  :hover{
      transition:1s;
color:black;
      cursor:pointer;
      border-bottom-left-radius:0px;
      border-bottom-right-radius:0px;
      background-position:right;
  }
  `
 export const StyledOption = styled.option`
 background-color:orange;
 font-style:underline;
 color:purple;
 text-align:center;
 `
 export const Alinhamento = styled.div`
 position:absolute;
 top:${props =>`${props.top}%`};
 right:${props =>`${props.right}%`};
 transform:translateX(-50%);
 `
 export const StyledDivInterna = styled.div`
 position:absolute;
 width:1000px;
 height:282px;
 bottom:0;
 right:0;
 background-color:#ffdbbd;
 border-bottom-right-radius:15px;
 border-top-left-radius:15px;
 padding:15px;
 max-height:282px;
 `
 export const StyledInfo = styled.div`
display:flex;
padding-bottom:10px;
border-bottom-style:solid;
border-bottom-color:rgba(0,0,0,0.5);
border-bottom-width:2px;
 `
 export const StyledDivInfo = styled.div`
margin-left:10px;
 `
 export const StyledButton = styled.input`
background-image:linear-gradient(to right, #5d2687,#BC35FF,#feb124);
background-size:200%;
padding: 5px 15px;
color:orange;
border:none;
border-top-left-radius:15px;
border-top-right-radius:15px;

:hover{
    color:black;
    background-position:right;
    transition:1s;
}
 `
 export const StyledBotãoAlugar = styled.input`
 background-image:linear-gradient(to left, #5F13B2,#BC35FF,#feb124);
 background-size:200%;
 padding-bottom: 25px;
 padding-left: 10px;
 width:100px;
 height:100px;
 border:none;
 border-bottom-left-radius:100px;
 border-top-right-radius:15px;
 color:black;
 font-size:20px;
 transform:translateX(+50%);
 color:#000;
 :hover{
     width:150px;
     height:150px;
     font-size:30px;
     background-position:top;
     transition:0.5s;
     color:#fff;
     font-weight:bold;
     
 }
  `
