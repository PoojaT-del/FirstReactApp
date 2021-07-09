import './App.css';
import Button from './Button'
import React from 'react'
import State from './StateInFunction'
import Student from './Props'
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
        <State />
        <Student name={"Pooja"} />
        <Student name={"Riya"} />
        <Student name={"Neeta"} />
      </div>
    );
  }
}

export default App;
