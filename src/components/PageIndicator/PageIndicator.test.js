import React from 'react';
import ReactDOM from 'react-dom';

import PageIndicator from './PageIndicator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageIndicator />, div);
});
