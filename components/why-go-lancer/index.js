import React from "react";
import { Col, Row } from "antd";

function WhyGolancer() {
  const data = [
    {
      title: "نظام التعليم الثنائي",
      description1:
        "قم بكسر الملل أثناء تعلمك من خلال دعوة صديقك للتعلم معاُ و لتكوين فريق للعلم معاً   في المستقبل ",
      image: "/images/why1.png",
    },
    {
      title: "رفع و تجديد المهارات لديك",
      description1:
        "استفد من قوة مسارات التدريبية المنسقة لتوجيهك من خلال المهارات التقنية التي تحتاج إليها للتقدم من المبتدئ إلى المحترف عبر مجموعة متنوعة من المهارات المختلفة التي تعمل على إعادة الصقل مهاراتك و قدراتك .",
      image: "/images/why2.png",
    },
    {
      title: "التعلم بالتطبيق",
      description1:
        "النظام التعليمي لدينا يعتمد على التطبيق العملي أكثر من الشرح النظري بحيث يوجد مشاريع عملية و تطبيقة مشابهة تماماً لما يتم طلبه في أسواق العمل و سيتم تقيم الطلاب بعد تسليم المشاريع من قيل مختصين في المجال",
      image: "/images/why3.png",
    },
    {
      title: "التمتابعة و التقيم",
      description1:
        "تعرف على مستوى المهارة التي تمتلكها  من خلال تقييمات المهارات. باستخدام Skill IQ ، يمكنك قياس مهارتك التقنية  ، وتحديد الثغرات المعرفية ونقاط القوة - أو معرفة أين تقف أنت بنفسك. ستحصل أيضًا على توصيات تعليمية مخصصة لمساعدتك في الارتقاء إلى المستوى أعلى. ثم احتفل بـإنجازاتك بعد التمكن من المهارة .",
      image: "/images/why4.png",
    },
    {
      title: "الغوص في البيانات",
      description1:
        "احصل على رؤية من من لديه المهارات الخبرةالتقنية لتتعلم المهارات الأكثر ارتباطًا بأهم أولوياتك. ثم تابع تقدمك من خلال رؤىة تطور مهاراتك بمرور الوقت للتأكد من أنك مستعدة لتقديم و الدخول في سوق العمل - كل ذلك من خلال المسارات التدريبة المحددة و الواضحة والمدعومة بالتقييم التي يمكنك الوثوق بها.",
      image: "/images/why5.png",
    },
    {
      title: "لغات البرمجة الأكثر طلبًا في سوق العمل",
      description1:
        "بناء المهارات للاستعداد للوظيفة. سواء كنت تتطلع إلى بدء مهنة جديدة ، أو تغيير مهنتك الحالية ، تساعدك المسارات الإحترافية على المنصة  في أن تصبح جاهزًا للعمل. تعلم بالسرعة التي تناسبك ، في أي وقت وفي أي مكان يناسبك.",
      image: "/images/why6.png",
    },
  ];
  return (
    <div>
      <div className="abotu-steps-container">
        <h1> لماذا قولانسر </h1>
        {data?.map((item, index) => {
          return (
            <div className="about-step-box">
              <Row
                className={index % 2 ? "" : "about-steps-controll-container"}
              >
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div className="about-step-preview">
                    <h3> {item.title} </h3>
                    <p> {item.description1} </p>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <div
                    className={
                      index % 2
                        ? "about-steps-image-controll-container"
                        : "about-step-image"
                    }
                  >
                    <img src={item.image} />
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyGolancer;
