import React from 'react';
import { Panel } from 'react-bootstrap';

export const RenderPreview = props => (
  <Panel bsStyle="info" id="preview">
    <Panel.Heading>
      <h2>Preview</h2>
    </Panel.Heading>

    <Panel.Body>{props.markDown}</Panel.Body>
  </Panel>
);

export const HTMLPreview = props => (
  <Panel bsStyle="info">
    <Panel.Heading>
      <h2>HTML</h2>
    </Panel.Heading>

    <Panel.Body>{props.rawHtml}</Panel.Body>
  </Panel>
);
