import React from 'react';
import ReactDOM from 'react-dom';

import BubbleIndicator from './BubbleIndicator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BubbleIndicator />, div);
});
