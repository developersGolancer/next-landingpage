import { Col, Row } from "antd";
import React from "react";

function HowItWork() {
  const data = [
    {
      title: "إكتشف",
      subTitle1: "حدد مسارك الخاص",
      description1:
        "أنت لست مثل أي شخص آخر ، فلماذا نظام التعليم يكون موحد للجميع دون مراعاة فرق المستويات ؟",
      subTitle2: "اختبار قياس المهارات ",
      description2:
        "نستخدم الذكاء الاصطناعي لقياس اهتماماتك وقدراتك وخبراتك لكي نستطيع تزويدك  بمسار مهني يتناسب مع مهاراتك و  يربطك بوظائف في سوق العمل المتطورة باستمرار.",
      image: "/images/first-image-preview.png",
      name: "خالد",
      position: "مطور تطبيقات ويب",
      newuser: false,
      start: true,
    },
    {
      title: "التعلم",
      subTitle1: "انطلق في رحلة لبناء مهاراتك.",
      description1:
        "نقدم مسارات تدريبية كاملة معدة من قبل خبراء في التطوير الوظيفي لبناء مهاراتك و جعلها تتناسب مع المهن الأسرع نموًا اليوم.",
      subTitle2: "",
      description2:
        "أنهِ الدورات التدريبية للحصول جلسات استشارية فردية ، وقتما تشاء ، وأينما كنت ، وشق طريقك في لوحة المتصدرين و جمع أكبر قدر ممكن من النقاط  و ابنِ مجتمع التعلم الخاص بك - وافعل كل ذلك دون الحاجة الى مبالغ مالية ضخمة.",
      image: "/images/second-image-preview.png",
      name: "",
      position: "",
      newuser: false,
      start: false,
    },
    {
      title: "أكسب المال",
      subTitle1: "أكسب المال بعد التعلم",
      description1:
        "استخدم مهاراتك الجديدة في سوق العمل لكسب المال - كل ذلك مع الاستمرار في التعلم وتطوير قدراتك.",
      subTitle2:
        "ستعرف دائمًا قيمة عملك - وسيعرف أصحاب العمل أن لديك المهارات اللازمة للنجاح.",
      description2:
        "في اللحظة التي تكمل فيها مسارك التدريبي ، نقوم تلقائيًا بتحديث ملفك الشخصي بمهاراتك الجديدة  و نتابع معك خطوة بخطوة حتى تتمكن من الحصول على أول عمل لك من منصات العمل الحر  و تتمكن من الغوص مباشرة في العمل الذي يثيرك.",
      image: "/images/third-image-preview.png",
      name: "",
      position: "",
      newuser: false,
      start: false,
    },
  ];

  return (
    <div className="how-it-work-container">
      <div className="section-title">
        <h1> كيف تعمل قولانسر </h1>
      </div>
      <div className="steps-container">
        {data?.map((item, index) => {
          return (
            <div className="step-box">
              <Row className={index % 2 ? "steps-controll-container" : ""}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="step-preview">
                    <h3> {item.title} </h3>
                    <h6> {item.subTitle1} </h6>
                    <p> {item.description1} </p>
                    <h6> {item.subTitle2} </h6>
                    <p> {item.description2} </p>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="step-image">
                    {item.start && <h3> البداية </h3>}
                    <img src={item.image} />
                    <div className="user-position">
                      <h4> {item.name} </h4>
                      <span> {item.position} </span>
                    </div>
                  </div>
                </Col>
              </Row>
              {index == 0 ? (
                <img
                  src="/images/preview-line1.png"
                  className="preview-line-img"
                />
              ) : (
                ""
              )}
              {index == 1 ? (
                <img
                  src="/images/preview-line2.png"
                  className="preview-line2-img"
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HowItWork;
