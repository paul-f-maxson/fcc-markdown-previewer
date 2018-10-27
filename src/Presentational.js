import React from 'react';
import { Panel } from 'react-bootstrap';

export const RenderPreview = props => (
  <Panel bsStyle="info" id="preview">
    <Panel.Heading>
      <Panel.Title>
        <h2>Preview</h2>
      </Panel.Title>
    </Panel.Heading>

    <Panel.Body>{props.markDown}</Panel.Body>
  </Panel>
);

export const HTMLPreview = props => (
  <Panel bsStyle="info">
    <Panel.Heading>
      <Panel.Title>
        <h2>HTML</h2>
      </Panel.Title>
    </Panel.Heading>

    <Panel.Body>{props.rawHtml}</Panel.Body>
  </Panel>
);

export const Explanation = props => (
  <Panel>
    <Panel.Heading>
      <Panel.Title toggle>
        <h2>How to use this tool</h2>
      </Panel.Title>
    </Panel.Heading>

    <Panel.Collapse>
      <Panel.Body>
        <p>
          Write Markdown in the Editor and it will be parsed and rendered in the
          Preview. The compiled HTML is also available. For further guidance,
          see the{' '}
          <a href="https://daringfireball.net/projects/markdown/basics">
            Markdown project docs
          </a>
          .
        </p>
        <p>
          The default styling of the preview is Bootstrap's 3's default theme,
          since that tool was used for this project's layout. Markdown syntax
          can be used to set your own CSS.
        </p>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);
