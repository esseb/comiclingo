import './SpeechBubble.css';

import React, { PropTypes } from 'react';

const SpeechBubble = props => {
  return <div className="speech-bubble">{props.children}</div>;
};

SpeechBubble.propTypes = {
  children: PropTypes.element.isRequired,
}

export default SpeechBubble;
