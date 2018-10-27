import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import showdown from 'showdown';
import Parser from 'html-react-parser';
import xss from 'xss';

import HTMLDownloadButton from './HTMLDownloadButton';
import { Input, HTMLPreview, RenderPreview, Explanation } from './Presentational';

const converter = new showdown.Converter();

const defaultMarkdown = `\
<!--- This is a comment. It will not show up in the rendering, but it will show up in the HTML. --->

<!--- For that reason they are useful for explanations --->

<!--- I'm using this comment to explain that what follows is an image --->

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

# This is an h1 heading

## This is an h2 subheading

[This is a link to wikipedia](wikipedia.org)

Here's some **very important bolded text**

* here's \n* a \n* list

> Quotes from famous people are cool.\n> This is not from a famous person but it is a quote.\n> -Me

\`a().single().line().of().code();\`

\`\`\`\nYou = can => (\n also()\n .render()\n .multiline()
.code()\n);\n\`\`\`
`;

class App extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = { rawText: defaultMarkdown };

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
        <Col xs={12}>
          <Explanation />
        </Col>

        <Col xs={12} sm={6}>
          <RenderPreview markDown={markDown} />
        </Col>

        <Col xs={12} sm={6}>
          <Input rawText={this.state.rawText} onChange={this.updateRawText} />
        </Col>

        <Col xs={12}>
          <HTMLPreview
            html={filteredHTML}
            downloadButton={<HTMLDownloadButton html={filteredHTML} />}
          />
        </Col>
      </Row>
    );
  }
}

export default App;
