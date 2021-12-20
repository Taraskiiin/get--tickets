import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Filter from "./components/Filter/Filter";
import Logo from "./components/Logo/Logo";
import NumberOfTransplants from "./components/NumberOfTransplants/NumberOfTransplants";
import TicketBoard from "./components/TicketBoard/TicketBoard";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";

function App() {
  return (
    <Container
      style={{
        backgroundColor: "#f3f7fa",
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 50,
      }}
    >
      <Row
        style={{
          width: "15%",
          margin: "0 auto",
        }}
      >
        <Logo />
      </Row>
      <Row
        style={{
          marginTop: 50,
        }}
      >
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
}

export default App;
