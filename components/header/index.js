import React, { useState } from "react";
import { Button, Typography } from "antd";
import ModalBox from "../ModalBox";
const { Title, Paragraph, Text, Link } = Typography;

function Header() {
  const [openModal, setOpenModal] = useState(false);

  const handelRegisterNewUser = () => {
    setOpenModal(true);
  };

  return (
    <div className="header-container">
      <div className="new-user-container users-box">
        <img src="/images/user.png" />
      </div>
      <div className="new-user-two-container users-box">
        <p>
          <span></span>
          مستخدم جديد
        </p>
        <img src="/images/user2.png" />
      </div>
      <img src="/images/dots-vector.svg" className="dots-vector" />

      <div className="box">
        <h1>نساعدك لتستثمر بمهاراتك التقنية</h1>
        <p>
          قو لانسر هي الوجهة الشخصية الوحيدة لبناء حياتك المهنية التي تتيح لك
          تعلم المهارات وكسب المال في نفس الوقت
        </p>
        <div className="register-first">
          <Button onClick={handelRegisterNewUser}> كن أول المستخدمين </Button>
        </div>
      </div>
      {openModal && (
        <ModalBox
          status={openModal}
          setModalStatus={(status) => setOpenModal(status)}
        />
      )}
    </div>
  );
}

export default Header;
