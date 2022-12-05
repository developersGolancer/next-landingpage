import { Col, Row } from "antd";
import React from "react";

function JobSuccess() {
  const data = [
    {
      title: "اكسب بينما تتعلم",
      description:
        "ابدأ العمل فورًا بالمهارات التي تعلمتها واكسب المال - كل ذلك أثناء مواصلة تعليمك.",
      image: "/images/job-success1.svg",
    },
    {
      title: "قل وداعاً لقلة المال",
      description:
        "يجب أن يكون تعلم المهارات المطلوبة في سوق العمل  بمتناول أي شخص في أي مكان.",
      image: "/images/job-success2.svg",
    },
    {
      title: "مسارات مخصصة لك",
      description: "ابحث عن مسار وظيفي ستحبه مصمم خصيصًا لك ولصالح اهتماماتك.",
      image: "/images/job-success3.svg",
    },
  ];

  return (
    <div className="job-success-container">
      <h1>ترجمة المهارات إلى النجاح الوظيفي.</h1>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={10}
          lg={10}
          xl={10}
          className="job-success-img-container"
        >
          <img src="/images/job-success-cards.png" />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          {data?.map((item) => {
            return (
              <Row className="card">
                <Col
                  xs={24}
                  sm={24}
                  md={18}
                  lg={18}
                  xl={18}
                  className="cards-preview"
                >
                  <h2> {item.title} </h2>
                  <h4>{item.description}</h4>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6} className="cards-img">
                  <img src={item.image} />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default JobSuccess;
