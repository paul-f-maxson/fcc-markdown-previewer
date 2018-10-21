import React from 'react';

const Input = props => (
  <label>
    <h2>
      Markdown:
    </h2>
    <textarea
      rows={10}
      cols={80}
      onChange={props.onChange}
      value={props.rawText}
      autoFocus
    />
  </label>
);

export default Input;
