import { Button, Col, Row } from "antd";
import React from "react";

function Levels() {
  return (
    <div className="levels-container">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          className="levels-img-container"
        >
          <img src="/images/levels.png" className="levels-img" />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="levels-preview">
            <h1>
              كلما استمتعت بالتعلم ، زادت سرعة وصولك إلى المكان الذي تريد الذهاب
              إليه.
            </h1>
            <p>
              إعمل جاهداً لتكون في أعلى قائمة المتصدرين ، واجمع الشارات ، واكسب
              نقاط الخبرة ، وتتبع تقدمك على لوحة معلومات مخصصة.
            </p>
            <div className="register-first">
              <Button> إعرف مستواك الأن </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Levels;
