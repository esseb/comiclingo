import React from 'react';
import ReactDOM from 'react-dom';

import TranslateBubble from './TranslateBubble';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TranslateBubble />, div);
});
