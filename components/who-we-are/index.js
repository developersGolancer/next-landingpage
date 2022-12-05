import { Col, Row } from "antd";
import React from "react";

function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <Row align="middle" style={{ height: "100%" }}>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <div className="who-we-are-preview">
            <h1> من نحن </h1>
            <p>
              منصة تدريبية عربية تعمل على توفير مسارات تقنية واضح للراغبين في
              تعلم أحد المسارات البرمجية و المتابعة مع الطلاب لتمكنهم من سوق
              العمل الحر
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <img src="/images/who-we-are.png" className="who-are-you-img" />
        </Col>
      </Row>
    </div>
  );
}

export default WhoWeAre;
