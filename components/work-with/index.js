import { Col, Row } from "antd";
import React from "react";

function WorkWith() {
  return (
    <div className="work-with-container">
      <div className="section-title">
        <h1> نعمل سوياً </h1>
      </div>
      <Row align="middle" style={{ height: "100%" }}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="work-with-item">
          <img src="/images/work-with1.png" />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="work-with-item">
          <img src="/images/work-with2.png" />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="work-with-item">
          <img src="/images/work-with3.png" />
        </Col>
      </Row>
    </div>
  );
}

export default WorkWith;
