import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { Panel } from 'react-bootstrap';

import "./Input.css";

const Input = props => (
  <Panel bsStyle="primary" id="markdown">

    <Panel.Heading>
      <h2>Markdown</h2>
    </Panel.Heading>

    <Panel.Body>
      <TextareaAutosize
        rows={30}
        onChange={props.onChange}
        value={props.rawText}
        id="editor"
        autoFocus
      />
    </Panel.Body>

  </Panel>
);

export default Input;
