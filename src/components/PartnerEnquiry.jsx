// PartnerEnquiry.jsx
import React, { useState } from "react";
import { Form, Input, Select, Tabs, Button, App as AntApp } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  BankOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import "../styles/partner-enquiry.css";

const COUNTRIES = [
  { value: "Australia", label: "Australia" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Singapore", label: "Singapore" },
  { value: "Other", label: "Other" },
];

export default function PartnerEnquiry() {
  const { message } = AntApp.useApp();
  const [form] = Form.useForm();
  const [mode, setMode] = useState("partner"); // "partner" | "pricing"

  const onFinish = (values) => {
    // Include the selected mode so your backend knows the intent
    const payload = { mode, ...values };
    console.log("Submit:", payload);
    message.success("Thanks! We’ll be in touch within one business day.");
    form.resetFields();
  };

  const tabs = [
    { key: "partner", label: "Become a partner" },
    { key: "pricing", label: "Request pricing" },
  ];

  return (
    <section className="pe" aria-labelledby="pe-title">
      <div className="pe__wrap">
        <header className="pe__head">
          <h2 id="pe-title">
            Start Your Partnership with <span className="pe__brand">Bluechip</span>
          </h2>
          <p className="pe__sub">
            Ready to become a Bluechip partner or request exclusive CyberPower pricing?
            Use the toggle to choose what you need—one simple form for both.
          </p>
        </header>

        <div className="pe__card">
          <Tabs
            className="pe__tabs"
            items={tabs}
            activeKey={mode}
            onChange={(k) => {
              setMode(k);
              form.resetFields();
            }}
            centered
          />

          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
            className="pe__form"
          >
            <div className="pe__grid">
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: "First name is required" }]}
              >
                <Input prefix={<UserOutlined className="pe__icon" />} placeholder="Alex" />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: "Last name is required" }]}
              >
                <Input placeholder="Morgan" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input prefix={<MailOutlined className="pe__icon" />} placeholder="alex@company.com" />
              </Form.Item>

              <Form.Item
                name="contact"
                label="Contact"
                rules={[{ required: true, message: "Contact is required" }]}
              >
                <Input prefix={<PhoneOutlined className="pe__icon" />} placeholder="+61 4xx xxx xxx" />
              </Form.Item>

              <Form.Item
                name="company"
                label="Company"
                rules={[{ required: true, message: "Company is required" }]}
              >
                <Input prefix={<BankOutlined className="pe__icon" />} placeholder="Acme Pty Ltd" />
              </Form.Item>

              <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: "Country is required" }]}
              >
                <Select
                  options={COUNTRIES}
                  placeholder="Select country"
                  suffixIcon={<GlobalOutlined className="pe__icon" />}
                />
              </Form.Item>

              <Form.Item name="message" label="Message" className="pe__full">
                <Input.TextArea
                  placeholder={
                    mode === "partner"
                      ? "Tell us about your business and how you plan to partner with Bluechip."
                      : "Share models, quantities, timelines, or any details for pricing."
                  }
                  autoSize={{ minRows: 4, maxRows: 8 }}
                  showCount
                  maxLength={1200}
                />
              </Form.Item>
            </div>

            <Button htmlType="submit" type="primary" size="large" className="pe__cta">
              Get Started
            </Button>
          </Form>
        </div>

        <p className="pe__foot">We’ll reply within one business day.</p>
      </div>
    </section>
  );
}
