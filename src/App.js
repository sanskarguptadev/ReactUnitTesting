import React, {Component} from 'react';
import './App.css';

import Gussedword from './guessedwords';
import Congrats from './congrats';
import Gussedwords from './guessedwords';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <Gussedwords guessedWords={[]} />
      </div>
    )
  }
}

export default App;
