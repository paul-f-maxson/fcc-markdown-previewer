import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import App from './App';

// import './Layout.css';

const Layout = props => (

  <Grid>
    <Row>
      <Col>
        <main>
          <App />
        </main>
      </Col>
    </Row>
  </Grid>

);

export default Layout;
