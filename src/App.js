import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import showdown from 'showdown';
import Parser from 'html-react-parser';
import xss from 'xss';

import Input from './Input';
import { HTMLPreview, RenderPreview } from './Presentational';

const converter = new showdown.Converter();

class App extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      rawText:
        "<!--- This is a comment. It will not show up in the rendering, but it will show up in the HTML. --->\n\n<!--- For that reason they are useful for explanations --->\n\n<!--- I'm using this comment to explain that what follows is an image --->\n\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')\n\n# This is an h1 heading\n\n## This is an h2 subheading\n\n[This is a link to wikipedia](wikipedia.org)\n\nHere's some **very important bolded text**\n\n* these\n* items\n* are\n* in\n* a\n* list\n\n> Quotes from famous people are cool.\n> This is not from a famous person but it is a quote.\n> -Me\n\n`a().single().line().of().code();`\n\n```\nYou = can => (\n also()\n .render()\n .multiline()\n .code()\n);\n```"
    };

    // Callback bindings
    this.updateRawText = this.updateRawText.bind(this);
  }

  updateRawText(e) {
    const value = e.target.value;
    this.setState({ rawText: value });

    e.preventDefault();
  }

  render() {
    const filteredHTML = xss(converter.makeHtml(this.state.rawText));
    const markDown = Parser(filteredHTML);

    return (
      <Row>
        <Col xs={12} sm={6}>
          <RenderPreview markDown={markDown} />
        </Col>

        <Col xs={12} sm={6}>
          <Input rawText={this.state.rawText} onChange={this.updateRawText} />
        </Col>

        <Col xs={12}>
          <HTMLPreview rawHtml={filteredHTML} />
        </Col>
      </Row>
    );
  }
}

export default App;
