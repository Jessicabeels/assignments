import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={

    }
  }
  render() {
    //Dynamic rendering
    return (
      <div >
        {this.state.isToggled
          ? <div>Here is one thing</div>
          : <div>Here is another thing</div>
          }
      </div>
    )
  }
}

export default App;
