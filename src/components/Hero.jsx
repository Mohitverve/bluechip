import React from "react";
import { Form, Input, Button, Card, message } from "antd";
import { ArrowRightOutlined, AppstoreOutlined } from "@ant-design/icons";
import logo from "../assets/cyberpro.png";
import "../styles/hero.css";

export default function CyberpowerHero({ onViewProducts }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    message.success("Thank you! We’ll get back to you soon.");
    form.resetFields();
  };

  return (
    <section className="cp-hero">
      <div className="cp-wrap">
        <div className="cp-grid-top">
          {/* LEFT SECTION */}
          <div className="cp-left">
            <div className="cp-head cp-head--stacked">
              <img
                src={logo}
                alt="CyberPower logo"
                className="cp-logo cp-logo--medium"
              />
              <p className="cp-tag cp-tag--below">
                Authorised CyberPower Distributor in Australia
              </p>
            </div>

            <h1 className="cp-title">
              <span className="cp-accent">Power Protection</span> You Can{" "}
              <span className="cp-accent">Trust</span>
            </h1>

            <p className="cp-sub">
              Expert advice, competitive pricing, and fast local support for
              resellers and MSPs across Australia.
            </p>
            <p className="cp-sub-cta">
              <strong>Start your partnership with Bluechip IT today.</strong>
            </p>

            <div className="cp-cta">
              <Button
                type="primary"
                size="large"
                className="cp-btn cp-btn--primary"
              >
                Become a Partner <ArrowRightOutlined />
              </Button>
              <Button
                size="large"
                className="cp-btn cp-btn--ghost"
                onClick={onViewProducts}
              >
                <AppstoreOutlined /> View Product Lines
              </Button>
            </div>

            <div className="cp-trustline">
              <span className="cp-trust-dot" />
              Distributor of the Year 2020–2024
            </div>
          </div>

          {/* RIGHT SECTION - GLASS FORM */}
          <div className="cp-right">
            <Card id="partner-form" className="cp-card glass-form" bordered={false}>
              <div className="cp-card-head">
                <h3 className="cp-card-title">Become a Partner</h3>
                <p className="cp-card-sub">
                  Register your interest to become an authorised reseller or MSP
                  partner for CyberPower solutions.
                </p>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                className="cp-form"
              >
                <Form.Item
                  name="fullname"
                  label="Full Name"
                  rules={[{ required: true, message: "Please enter your full name" }]}
                >
                  <Input placeholder="Your full name" size="middle" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Business Email"
                  rules={[
                    { required: true, message: "Please enter your business email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="you@company.com" size="middle" />
                </Form.Item>

                <Form.Item
                  name="company"
                  label="Company Name"
                  rules={[{ required: true, message: "Please enter your company name" }]}
                >
                  <Input placeholder="e.g., Cyber Systems Pty Ltd" size="middle" />
                </Form.Item>

                <Form.Item name="phone" label="Phone (optional)">
                  <Input placeholder="+61 4XX XXX XXX" size="middle" />
                </Form.Item>

                <Form.Item name="message" label="Message / Enquiry">
                  <Input.TextArea
                    placeholder="Tell us what you're looking for..."
                    autoSize={{ minRows: 3, maxRows: 4 }}
                  />
                </Form.Item>

                <Button htmlType="submit" type="primary" size="middle" className="cp-submit">
                  Submit Application
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
