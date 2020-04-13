import React from 'react';
import './styles.css'
import Header from './components/Header' 
import MainSection from './components/MainSection/index'

class App extends React.Component {
    
render(){
return(
<div className="App">
<Header />
<MainSection conteudo={this.props.MyLabel} />
</div>
)}
}

// }
export default App;