import React from "react";
import { Row, Col } from "react-bootstrap";
import Mycard from "./Mycard";

export default function Grid() {
  return (
    <div>
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Mycard />
          </Col>
        ))}
      </Row>
    </div>
  );
}
