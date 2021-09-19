import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
export default function mynavbar() {
  return (
    <Navbar bg="warning" variant="dark">
      <Container>
        <Navbar.Brand href="#home">NOTES</Navbar.Brand>
        <Nav className="me">
          <Nav.Link href="#ADD">+New</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
