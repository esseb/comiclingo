import './TranslateBubble.css';

import React, { PropTypes } from 'react';

import SpeechBubble from '../SpeechBubble/SpeechBubble';
import SelectableWords from '../SelectableWords/SelectableWords';

const TranslateBubble = props => {
  const handleSelect = text => {
    alert(`TODO(esseb): Translate "${text}"`);
  }

  return (
    <div className="translate-bubble">
      <SpeechBubble>
        <SelectableWords text={props.text} onSelect={handleSelect} />
      </SpeechBubble>
    </div>
  );
};

TranslateBubble.propTypes = {
  text: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default TranslateBubble;
