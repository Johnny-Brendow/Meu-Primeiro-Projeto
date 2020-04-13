import styled from 'styled-components';
export const StyledMainDiv = styled.div`
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
export const StiledClientList = styled.div`
background-image:radial-gradient(#7740A2, #60298B,#531e7c);
background-size:100%;
box-shadow:2px 2px 2px rgba(0,0,0,0.5);
border-style:solid;
border-width:2px;
border-radius:15px;
width:300px;
height:95%;
position:absolute;
left:2%;
max-height:750px;
`
export const StyledUl = styled.ul`
list-style-type: none;
padding:15px;
`
export const StyledLi = styled.li`
color:#000;
font-size:20px;
width:270px;
height:25px;
margin:5px 0px;
:hover{

    background-image:radial-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.0));
    transition:1s;
    cursor:pointer;
    font-size:22px;
    color:orange;
    padding-left:5px;
    height:25px;
}
`

export const StyledSobreOClienteDiv = styled.div`
display:inline-flex;
position:absolute;
top:2%;
right:2%;
width:1000px;
height:20%;
background-image:radial-gradient(#7740A2, #60298B,#531e7c);
box-shadow:2px 2px 2px rgba(0,0,0,0.5);
border-style:solid;
border-width:2px;
border-radius:15px;

`
export const StyledDivInterna = styled.div`
position:absolute;
bottom:22%;
color:orange;
border-color:rgba(0,0,0,0.5);
right:2%;
width:1000px;
height:53%;
border-radius:15px;
background-image:radial-gradient(#7740A2, #60298B,#531e7c);
box-shadow:2px 2px 2px rgba(0,0,0,0.5);
border-style:solid;
border-width:2px;
border-radius:15px;
`
export const StyledP = styled.p`
color:orange;
width:100%;
height:25px;
font-size:25px;
text-align:center;
margin-bottom:15px;
`
export const StyledBloco = styled.div`
width:150px;
height:100px;
text-align:center;
background-image:radial-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.1),rgba(0,0,0,0.0));
border-radius:30px;
`
export const StyledInput = styled.input`
margin-top:30px;
display:block;
transform:translateX(+10%);
width:120px;
height:25px;
text-align:center;
border-radius:5px;
`
export const StyledA = styled.a`
color:#fff;
font-size:20px;
font-style:oblique;
padding-top:7px;
:hover{
    transition:0.5s;
    font-size:23px;
    color:#FF5D00;
    text-decoration:none;
}
`
export const StyledEditar = styled.div`
position:absolute;
display:inline-flex;
align-items:center;
bottom:1%;
right:2%;
width:1000px;
height:18%;
border-radius:15px;
border-radius:15px;
`
export const StyledBuutton = styled.input`
color:black;
background-image:linear-gradient(to right,#5d2687,#BC35FF,#feb124);
background-size:250%;
font-size:20px;
position:absolute;
right:${props =>`${props.right}%`};
border-color:rgba(0,0,0,0.5);
border-radius:15px;
font-style:oblique;
padding:7px;
:hover{
    transition:1s;
color:black;
    cursor:pointer;
    background-position:right;
}
`