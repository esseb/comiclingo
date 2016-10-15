import './CurrentBubble.css';

import React, { PropTypes } from 'react';

import BubbleIndicator from '../BubbleIndicator/BubbleIndicator';
import PageIndicator from '../PageIndicator/PageIndicator';
import PanelIndicator from '../PanelIndicator/PanelIndicator';

const CurrentBubble = ({page, panel, bubble}) => {
  return (
    <div className="current-bubble">
      <div className="current-bubble__value">
        <PageIndicator value={page} />
      </div>

      <div className="current-bubble__value">
        <PanelIndicator value={panel} />
      </div>

      <div className="current-bubble__value">
        <BubbleIndicator value={bubble} />
      </div>
    </div>
  );
};

CurrentBubble.propTypes = {
  page: PropTypes.number.isRequired,
  panel: PropTypes.number.isRequired,
  bubble: PropTypes.number.isRequired,
}

export default CurrentBubble;
