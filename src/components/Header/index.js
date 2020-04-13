import React,{Component} from 'react';
import './styles.css';
import MyButton from './Botões/botoes';
export default class Header extends Component {
        constructor(props){
        super(props)
        this.state = {
            labelText:'',
            paginaAtual:'',
            botãoEstaApertado:'',
        }
    }

    setLabelText = (labelText) =>  {
        this.setState({labelText})
    }

    
    componentDidMount(){
        
        this.setState({paginaAtual:'/pagina1'});
        this.setState({botãoEstaApertado:true});
        if (this.state.paginaAtual === '/pagina1'){
            
        }
    }
    
    render(){
     
             return(
<header id="main-header"> 
<img id='logo' alt='logomarca.png' src='https://uploaddeimagens.com.br/images/002/548/023/original/Fumagally_laranja_logo_sem_fundo.png?1585081142'></img>

<MyButton  handleClick={this.setLabelText}text='Estoque'             link="/pagina1" /> 
<MyButton  handleClick={this.setLabelText}text='Calculos'            link="/pagina2" />
<MyButton  handleClick={this.setLabelText}text='Alugar'              link="/pagina3" />
<MyButton  handleClick={this.setLabelText}text='Aluguéis'            link="/pagina4" />
<MyButton  handleClick={this.setLabelText}text='Valores de Mercado'  link="/pagina5" />

<p>aqui fica o qual botão foi clicado :</p> 

</header>
);
}           
}
// handleClick={this.setButton(this.props.link)} verificarApertado={false} corFundo={}
// handleClick={this.setButton(this.props.link)} verificarApertado={false} corFundo={}
// handleClick={this.setButton(this.props.link)} verificarApertado={false} corFundo={}
// handleClick={this.setButton(this.props.link)} verificarApertado={false} corFundo={}
// handleClick={this.setButton(this.props.link)} verificarApertado={false} corFundo={}