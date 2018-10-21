import React from 'react';
import showdown from 'showdown';
import Parser from 'html-react-parser';

const converter = new showdown.Converter();

const Display = props => {

  const rawHtml = converter.makeHtml(props.rawText);
  const markDown = Parser(rawHtml);

  return (
    <div>
      {markDown}
      {rawHtml}
    </div>
  );

};

export default Display;
