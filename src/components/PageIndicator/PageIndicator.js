import './PageIndicator.css';

import React, { PropTypes } from 'react';

const PageIndicator = ({value}) => {
  return <span className="page-indicator">{value}</span>;
};

PageIndicator.propTypes = {
  value: PropTypes.number.isRequired,
}

export default PageIndicator;
