import './SelectableWords.css';

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

class SelectableWords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: props.text.split(/\s/),
      selectionInitial: null,
      selectionStart: null,
      selectionEnd: null,
    };

    this.isDragging = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      words: nextProps.text.split(/\s/),
    });
  }

  handleMouseDown(event) {
    this.isDragging = true;

    const index = event.target.dataset.wordIndex;
    if (typeof index !== 'undefined') {
      this.setState({
        selectionInitial: index,
        selectionStart: index,
        selectionEnd: index,
      });
    }
  }

  handleMouseUp(event) {
    this.isDragging = false;

    // If anything was selected, call the `onSelect` prop with the selected
    // text.
    const {words, selectionStart, selectionEnd} = this.state;
    if (selectionStart !== null && selectionEnd !== null) {
      const text = words.slice(selectionStart, selectionEnd + 1).join(' ');
      this.props.onSelect(text);
    }

    this.setState({
      selectionInitial: null,
      selectionStart: null,
      selectionEnd: null,
    });
  }

  handleMouseMove(event) {
    if (this.isDragging === false) {
      return;
    }

    const index = event.target.dataset.wordIndex;
    if (typeof index === 'undefined') {
      return;
    }

    const {selectionInitial} = this.state;

    this.setState({
      selectionStart: Math.min(selectionInitial, index),
      selectionEnd: Math.max(selectionInitial, index)
    });
  }

  renderWord(word, index) {
    const {selectionStart, selectionEnd} = this.state;

    // Check if the word index is between the start and end selection.
    let selected = false;
    if (selectionStart !== null && selectionEnd !== null) {
      selected = index >= selectionStart && index <= selectionEnd;
    }

    const classes = classNames({
      'selectable-words__word': true,
      'selectable-words__word--selected': selected,
    })

    return <span className={classes} data-word-index={index}>{word}</span>;
  }

  splitText(text) {
    return text.split(/\s/);
  }

  render() {
    const {words} = this.state;

    return (
      <div
        className="selectable-words"
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}
      >
        {words.map((word, index) => [
          this.renderWord(word, index), ' '
        ])}
      </div>
    );
  }
}

SelectableWords.propTypes = {
  text: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default SelectableWords;
