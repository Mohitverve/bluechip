import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./../styles/Hero.css";
import logo from "../assets/cyberpro.png";

const Hero = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    message.success("Thank you! We’ll get back to you soon.");
    form.resetFields();
  };

  return (
    <section className="hero" aria-label="CyberPro hero">
      <div className="hero__inner">
        {/* Left Section */}
        <div className="hero__left">
          <img
            src={logo}
            alt="Bluechip"
            width="150"
            height="42"
            decoding="async"
            className="hero__logo"
          />
          <p className="hero__powered">
            powered by <span>bluechip</span>
          </p>

          <h1 className="hero__title">
            CyberPower — <span className="hero__title-accent">secure, simple,</span> and built for scale.
          </h1>
          <p className="hero__subtitle">
            End-to-end cybersecurity services for modern vendors. Compliance, monitoring, and rapid response without the noise.
          </p>

          <Button
            type="primary"
            shape="round"
            size="large"
            className="hero__cta"
            icon={<SendOutlined />}
            onClick={() =>
              document
                .getElementById("quote-form")
                ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Get a Free Quote
          </Button>
        </div>

        {/* Right Section - Single Step Form */}
        <div className="hero__right" id="quote-form">
          <div className="quote-card">
            <h3 className="quote-card__title">Request a Quote</h3>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              name="singleQuoteForm"
              className="quote-form"
              requiredMark="optional"
            >
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your full name" }]}
              >
                <Input placeholder="Jane Doe" allowClear />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input placeholder="jane@company.com" allowClear />
              </Form.Item>

              <Form.Item
                name="company"
                label="Company Name"
                rules={[{ required: true, message: "Please enter your company name" }]}
              >
                <Input placeholder="Bluechip Pvt Ltd" allowClear />
              </Form.Item>

              <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: "Please select your country" }]}
              >
                <Select
                  showSearch
                  placeholder="Select a country"
                  options={[
                    { label: "India", value: "India" },
                    { label: "United States", value: "USA" },
                    { label: "United Kingdom", value: "UK" },
                    { label: "Australia", value: "Australia" },
                    { label: "Canada", value: "Canada" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="Comments or Message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea placeholder="Tell us what you’re looking for…" rows={4} />
              </Form.Item>

              <div className="quote-actions">
                <Button type="primary" htmlType="submit" className="btn-primary" icon={<SendOutlined />}>
                  Submit Request
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
