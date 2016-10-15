import './BubbleIndicator.css';

import React, { PropTypes } from 'react';

const BubbleIndicator = ({value}) => {
  return <span className="bubble-indicator">{value}</span>;
};

BubbleIndicator.propTypes = {
  value: PropTypes.number.isRequired,
}

export default BubbleIndicator;
