import React from 'react';
import { Panel } from 'react-bootstrap';
import TextareaAutosize from 'react-autosize-textarea';

import './Input.css';

export const Input = props => (
  <Panel bsStyle="primary" id="markdown">
    <Panel.Heading>
      <h2>Editor</h2>
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

export const RenderPreview = props => (
  <Panel bsStyle="primary" id="preview">
    <Panel.Heading>
      <Panel.Title>
        <h2>Preview</h2>
      </Panel.Title>
    </Panel.Heading>

    <Panel.Body>{props.markDown}</Panel.Body>
  </Panel>
);

export const HTMLPreview = props => (
  <Panel>
    <Panel.Heading>
      <Panel.Title>
        <h2>HTML</h2>
      </Panel.Title>
    </Panel.Heading>

    <Panel.Body>{props.html}</Panel.Body>
    <Panel.Footer>{props.downloadButton}</Panel.Footer>
  </Panel>
);

export const Explanation = props => (
  <Panel bsStyle="info">
    <Panel.Heading>
      <Panel.Title toggle>
        <h2>How to use this tool</h2>
      </Panel.Title>
    </Panel.Heading>

    <Panel.Collapse>
      <Panel.Body>
        <p>
          Write Markdown in the Editor and it will be parsed and rendered in the Preview. For
          further guidance, see the{' '}
          <a href="https://daringfireball.net/projects/markdown/basics">Markdown project docs</a>.
        </p>
        <p>
          The default styling of the preview is Bootstrap's 3's default theme, since that tool was
          used for this project's layout. Markdown syntax can be used to set your own CSS.
        </p>
        <p>
          The compiled HTML is also available. Click the button below to download a fully functional
          web page of your HTML (complete with Bootstrap styling). This .html file can be opened in
          the browser. Your browser mostly likely has built in tools to make changes to this file
          (look for Developer Tools). It also probably has a function to save the file as a PDF.
        </p>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);
