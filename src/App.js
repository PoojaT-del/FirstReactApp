import './App.css';
import Button from './Button'
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
        name :'Null'
    }
  }
  render() 
  {
    return (
      <div className="App">
        <h1>Props!</h1>
        <button style={{backgroundColor:'pink',marginRight:30}}
         onClick={()=>this.setState({name:"Pooja"})}>Click Me</button>
        <Button name={this.state.name} />
      </div>
    );
  }
}

export default App;
