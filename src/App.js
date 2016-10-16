import './App.css';

import React, { Component } from 'react';

import SpeechBubble from './components/SpeechBubble/SpeechBubble';
import SelectableWords from './components/SelectableWords/SelectableWords';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="app__intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2>Components</h2>
        <div className="app__components">
          <div className="app__component">
            <SelectableWords
              text="Lorem ipsum dolor sit amet!"
              onSelect={(text) => {console.log(text)}}
            />
          </div>

          <div className="app__component">
            <SpeechBubble>
              <p>Filler text</p>
            </SpeechBubble>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
