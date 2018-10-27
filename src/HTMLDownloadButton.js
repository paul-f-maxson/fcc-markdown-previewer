import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
const downloadAsFile = require('download-as-file');

const htmlFullPage = htmlSnippet => `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">

      <!-- Bootstrap 3 -->
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      >

      <!-- Bootstrap Theme -->
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossorigin="anonymous"
      >

      <title>My Web Page</title>

      <style>
          body { margin: 10px; }

      </style>

    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-8">
            ${htmlSnippet}
          <div>
        <div>
      <div>
    </body>
  </html>
`;

export default class HTMLDownloadButton extends Component {
  constructor(props) {
    super(props);

    this.download = this.download.bind(this);
  }

  download(e) {
    downloadAsFile({
      data: htmlFullPage(this.props.html),
      filename: 'MyWebPage.html',
    });
  }

  render() {
    return <Button onClick={this.download}>Download HTML</Button>;
  }
}
