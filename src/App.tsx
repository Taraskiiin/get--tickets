import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ThemeProvider } from 'styled-components';

import { Filter, Logo, TicketBoard, NumberOfTransplants } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Reset } from 'styled-reset';

import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </>
);

export default App;
