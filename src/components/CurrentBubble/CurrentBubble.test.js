import React from 'react';
import ReactDOM from 'react-dom';

import CurrentBubble from './CurrentBubble';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrentBubble />, div);
});
