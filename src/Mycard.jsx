import React from "react";
import { Card } from "react-bootstrap";

export default function Mycard() {
  return (
    <div>
      <Card border="warning">
        <Card.Header
          contentEditable="true"
          style={{ background: " yellow", opacity: "1" }}
        >
          Note{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title contentEditable="true">Info Card Title</Card.Title>
          <Card.Text contentEditable="true">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
