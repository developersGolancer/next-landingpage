import { Col, Row } from "antd";
import React from "react";

function TrustFuture() {
  return (
    <div className="trust-container">
      <Row align="middle" style={{ height: "100%" }}>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <div className="trust-preview">
            <h1> واجه المستقبل بثقة </h1>
            <p>
              وبالمهارات والرؤى الهندسية لتزدهر. تُمكِّن مساراتنا الأشخاص
              التقنين من التنقل في الاتجاهات الرقمية ومعرفة احتياجات العملاء
              التي تستمر في التحول بسرعة البرق. تعلم مساراً واحدًا (أو أكثر)
              وستعمل على تحويل القوة العاملة في مجال التكنولوجيا لديك.
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <img src="/images/trust.png" className="trust-img" />
        </Col>
      </Row>
    </div>
  );
}

export default TrustFuture;
