import './PanelIndicator.css';

import React, { PropTypes } from 'react';

const PanelIndicator = ({value}) => {
  return <span className="panel-indicator">{value}</span>;
};

PanelIndicator.propTypes = {
  value: PropTypes.number.isRequired,
}

export default PanelIndicator;
