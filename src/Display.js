import React from 'react';
import showdown from 'showdown';
import Parser from 'html-react-parser';

import "./Display.css";

const converter = new showdown.Converter();

const Display = props => {

  const rawHtml = converter.makeHtml(props.rawText);
  const markDown = Parser(rawHtml);

  return (
    <div className="Display">

      <div className="item blue" id="preview">

        <div className="item-heading">
          <h2>Preview</h2>
        </div>

        <div className="item-content">
          {markDown}
        </div>

      </div>

      <div className="item green" id="raw-html">

        <div className="item-heading" >
          <h2>HTML</h2>
        </div>

        <div className="item-content">
          {rawHtml}
        </div>

      </div>

    </div>
  );

};

export default Display;
