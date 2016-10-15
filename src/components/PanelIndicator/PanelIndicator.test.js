import React from 'react';
import ReactDOM from 'react-dom';

import PanelIndicator from './PanelIndicator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PanelIndicator />, div);
});
