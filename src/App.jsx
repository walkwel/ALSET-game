import React, { Component } from 'react';
import ALSET_Game from './modules/ALSET-game/index.jsx';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ALSET_Game key={0} gameId={0}/>
      </div>
    );
  }
}

export default App;
