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

    let index = event.target.dataset.wordIndex;
    if (typeof index !== 'undefined') {
      index = parseInt(index, 10);

      this.setState({
        selectionInitial: index,
        selectionStart: index,
        selectionEnd: index,
      });
    }
  }

  handleMouseMove(event) {
    if (this.isDragging === false) {
      return;
    }

    let index = event.target.dataset.wordIndex;
    if (typeof index !== 'undefined') {
      index = parseInt(index, 10);
      const {selectionInitial} = this.state;

      this.setState({
        selectionStart: Math.min(selectionInitial, index),
        selectionEnd: Math.max(selectionInitial, index)
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

  renderWord(word, index) {
    const {selectionStart, selectionEnd} = this.state;

    // Check if the word index is between the start and end selection.
    let selected = false;
    if (selectionStart !== null && selectionEnd !== null) {
      selected = index >= selectionStart && index <= selectionEnd;
    }

    if (selected) {
      console.log('index', index)
      console.log('selectionStart', selectionStart)
      console.log('selectionEnd', selectionEnd)
    }

    const classes = classNames({
      'selectable-words__word': true,
      'selectable-words__word--selection': selected,
      'selectable-words__word--selection-start': index === selectionStart,
      'selectable-words__word--selection-end': index === selectionEnd,
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
        onMouseMove={this.handleMouseMove.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
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
