import './App.css';

import React, { Component } from 'react';

import BubbleIndicator from './components/BubbleIndicator/BubbleIndicator';
import CurrentBubble from './components/CurrentBubble/CurrentBubble';
import PageIndicator from './components/PageIndicator/PageIndicator';
import PanelIndicator from './components/PanelIndicator/PanelIndicator';
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

        <CurrentBubble page={1} panel={3} bubble={2} />
        <textarea></textarea>
        <button>New bubble</button>
        <button>New panel</button>
        <button>New page</button>

        <h2>Components</h2>
        <div className="app__components">
          <div className="app__component">
            <CurrentBubble page={1} panel={3} bubble={2} />
          </div>

          <div className="app__component">
            <PageIndicator value={3} />
          </div>

          <div className="app__component">
            <PageIndicator value={24} />
          </div>

          <div className="app__component">
            <PanelIndicator value={3} />
          </div>

          <div className="app__component">
            <PanelIndicator value={24} />
          </div>

          <div className="app__component">
            <BubbleIndicator value={3} />
          </div>

          <div className="app__component">
            <BubbleIndicator value={24} />
          </div>

          <div className="app__component">
            <SelectableWords
              text="Lorem ipsum dolor sit amet!"
              onSelect={(text) => {console.log(text)}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
