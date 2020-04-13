import styled from 'styled-components'
export const StyledH1 = styled.h1`
      color:orange;
      border-radius:20px;
      width:694px;
      height:25px;
      font-size:15px;
      background-color:rgba(0, 0, 0, 0.500);
      text-align:center;
      transform:translate(-20px,-20px);
      border-bottom-color:#230d33;
      border-bottom-style:solid;
      border-bottom-width:5px;
      `
export const Img = styled.img`
      height:50px;
      width:50px;
      position:absolute;
      left:20px;
      top:10px;
      `
export const ListaDeItens = styled.div`
      float:left;
      background-color:transparent;
      width:694px;
      height:80px;
      transform:translateX(-3%);
      margin-bottom:10px;
      position:relative;
      align-items:left;
      box-shadow: 0 5px 0  rgba(0, 0, 0, 0.600);
        input.texto{
          width:150px;
          height:25px;
          border-radius:5px;
          right:0;
          transform: translateX(-20px);
          top:20%;
          position:absolute;
        }
        input.botao{
          width:50px;
          height:25px;
          border-radius:5px;
          right:0%;
          top:60%;
          position:absolute;
          transform: translateX(-70px);
          background-color:orange;
          color:purple;
          border-color:rgba(0, 0, 0, 0.600)
        }
        p{
          position:absolute;
          bottom:50%;
          right:50%;
          transform: translateX(50%);
          font-size:20px;
          color:orange;
          
        }
`
export const AtualizarValores = styled.div`
background-color: #57217f;
width: 700px;
height: 90%;
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
export const ValoresRegistrados = styled.div`


       border-style:solid;
       border-color:#230d33;
       border-width:6px;
       background-color: #57217f;
       width: 700px;
       height: 550px;
       position: absolute;
       right:25px;
       padding:20px;
       border-radius: 20px;
      `
export const Footer = styled.footer`
text-align:center;
align-items:center;
position: absolute;
padding-top:10px;
bottom:0%;
right:50%;
transform:translatex(+50%);
width:100%;
height:38px;
background-color:orange;
color:black;
border-bottom-left-radius:17px;
border-bottom-right-radius:17px;
:hover{cursor:pointer}
;

img{
  width:20px;
  height:20px;
  position:absolute;
  right:30%;
  top:50%;
  transform:translatey(-50%)
}
`














