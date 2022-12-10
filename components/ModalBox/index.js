import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { RegisterNewUser } from "./api";

function ModalBox({ status, setModalStatus }) {
  const [showErrorMessage, setShowErrorMessage] = useState();

  const handleCancel = () => {
    setModalStatus(false);
  };
  const onFinish = (values) => {
    // values are here ....
    const { username, email, password, mobile } = values;
    console.log("Success:", values);
    const data = {
      username,
      email,
      password,
      mobile,
    };
    if (username && email && password && mobile) {
      RegisterNewUser(data).then((res) => {
        if (res.Message == "User is already Exist") {
          setShowErrorMessage(true);
        } else {
          setModalStatus(false);
          // continue to current app and logged the user with token we have in response
        }
        console.log("Success res res res:", res);
      });
    }
  };

  return (
    <>
      <Modal
        title="سجل لتكن اول المستخدمين  "
        open={status}
        className="modal-container"
        footer={false}
        onCancel={handleCancel}
      >
        <Form
          name="RegisterForm"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <label className="label"> الإسم كاملاً </label>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "الرجاء ادخال البيانات" }]}
          >
            <Input
              placeholder="الإسم كاملاً"
              type="text"
              className="register-input"
              onChange={() => setShowErrorMessage(false)}
            />
          </Form.Item>
          {showErrorMessage && (
            <div className="error-message">
              <h2>
                اسم المستخدم غير متاح. <br />
                الرجاء اختيار اسم مستخدم اخر.
              </h2>
            </div>
          )}
          <label className="label"> البريد الإلكتروني </label>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "الرجاء ادخال البيانات" }]}
          >
            <Input
              placeholder="البريد الإلكتروني"
              type="email"
              className="register-input"
              onChange={() => setShowErrorMessage(false)}
            />
          </Form.Item>
          <label className="label"> رقم الجوال </label>
          <Form.Item
            name="mobile"
            rules={[{ required: true, message: "الرجاء ادخال البيانات" }]}
          >
            <Input
              placeholder="رقم الجوال"
              className="register-input"
              onChange={() => setShowErrorMessage(false)}
            />
          </Form.Item>
          <label className="label"> كلمة المرور </label>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "الرجاء ادخال البيانات" }]}
          >
            <Input
              placeholder=" كلمة المرور "
              className="register-input"
              type="password"
              onChange={() => setShowErrorMessage(false)}
            />
          </Form.Item>
          <div className="actions-container">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                تسجيل
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={handleCancel}>
                إغلاق
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default ModalBox;
