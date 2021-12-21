import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Filter, Logo, TicketBoard, NumberOfTransplants } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Reset } from 'styled-reset';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <Container>
    <Reset />
    <GlobalStyle />
    <Row>
      <Logo />
    </Row>
    <Row>
      <Col sm={3}>
        <NumberOfTransplants />
      </Col>
      <Col sm={9}>
        <Filter />
        <TicketBoard />
      </Col>
    </Row>
  </Container>
);

export default App;
