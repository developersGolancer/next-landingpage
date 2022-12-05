import React from "react";
import { Button, Col, Row, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

function AboutHeader() {
  return (
    <div className="about-header-container">
      <Row align="middle" style={{ height: "100%" }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img src="/images/webinar.png" className="about-header-img" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="about-header-preview">
            <h1> هنا حيث تقوم ببناء مهارات تقنية أفضل بشكل أسرع </h1>
            <p>
              نمحك الطلاقة التقنية التي تحتاج إليها لبناء المهارات المهمة للحصول
              على عمل.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutHeader;
