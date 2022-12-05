import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";

function ModalBox({ status, setModalStatus }) {
  const handleCancel = () => {
    setModalStatus(false);
  };
  const onFinish = (values) => {
    // values are here ....
    // confirmPassword
    // email
    // mobil
    // password
    // username
    console.log("Success:", values);
    //  I think we need to add loading and when we have response we can close modal
    // setModalStatus(false);
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
            <Input placeholder="الإسم كاملاً" className="register-input" />
          </Form.Item>
          <label className="label"> البريد الإلكتروني </label>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "الرجاء ادخال البيانات" }]}
          >
            <Input
              placeholder="البريد الإلكتروني"
              type="email"
              className="register-input"
            />
          </Form.Item>
          <label className="label"> رقم الجوال </label>
          <Form.Item
            name="mobil"
            rules={[{ required: true, message: "الرجاء ادخال البيانات" }]}
          >
            <Input placeholder="رقم الجوال" className="register-input" />
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
            />
          </Form.Item>
          <label className="label"> تاكيد كلمة المرور </label>
          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: "الرجاء ادخال البيانات" }]}
          >
            <Input
              placeholder=" تاكيد كلمة المرور "
              className="register-input"
              type="password"
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
