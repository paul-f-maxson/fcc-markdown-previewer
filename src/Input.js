import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import "./Input.css";

const Input = props => (
  <div className="Input">

    <div className="item red" id="markdown">

      <div className="item-heading">
        <h2>Markdown</h2>
      </div>

      <div className="item-content">
        <TextareaAutosize
          className="boxsizingBorder"
          rows={30}
          onChange={props.onChange}
          value={props.rawText}
          id="markdown-input"
          autoFocus
        />
      </div>


    </div>


  </div>
);

export default Input;
