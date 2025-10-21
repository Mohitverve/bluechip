import { useEffect, useRef, useState } from "react";
import { Form, Input, Button, App as AntApp } from "antd";
import "../styles/hero.css";

import logo from "../assets/cyberpower.webp";
import logoFallback from "../assets/cyberpro.png";

export default function Hero() {
  const { message } = AntApp.useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    rootRef.current
      ?.querySelectorAll(".cp-hero__shell, .cp-hero__formCard")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onFinish = async () => {
    try {
      setLoading(true);
      message.success({
        content: "Thanks — our team will reach out shortly.",
        duration: 2.2,
      });
      form.resetFields();
    } catch {
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cp-hero" id="cyber-hero" ref={rootRef} data-virtual-section>
      <span className="cp-hero__glow cp-hero__glow--1" aria-hidden="true" />
      <span className="cp-hero__glow cp-hero__glow--2" aria-hidden="true" />

      <div className="cp-hero__wrap">
        <div className="cp-hero__shell">
          <div className="cp-hero__logoRow">
            <picture>
              <source srcSet={logo} type="image/webp" />
              <img
                src={logoFallback}
                alt="CyberPower"
                className="cp-hero__logo"
                width="180"
                height="38"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                rel="preload" as="image"
                type="image/webp"
              />
            </picture>
          </div>

          <h1 className="cp-hero__title">
            Power Protection <span>You Can Trust.</span>
          </h1>

          <p className="cp-hero__sub">
            Expert advice, competitive pricing, and fast local support for resellers and MSPs across Australia.
          </p>

          <p className="cp-hero__sub-strong">
            <strong>Start your partnership with Bluechip IT today.</strong>
          </p>

          <div className="cp-hero__ctaRow">
            <Button
              type="primary"
              size="large"
              className="cp-hero__ctaBtn cp-hero__ctaBtn--primary"
            >
              Become a Partner
            </Button>

            <Button
              size="large"
              className="cp-hero__ctaBtn cp-hero__ctaBtn--outline"
            >
              View Product Lines
            </Button>
          </div>

          <div className="cp-hero__trust">
            <span className="dot" aria-hidden="true" /> Distributor of the Year 2020–2024
          </div>
        </div>

        <div className="cp-hero__formCard">
          <header className="cp-hero__formHead">
            <h3>Become a Partner</h3>
            <p>
              Register your interest to become an authorised reseller or MSP partner for CyberPower power solutions.
            </p>
          </header>

          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinish}
            className="cp-hero__form"
          >
            <div className="cp-hero__grid">
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your full name" }]}
              >
                <Input size="large" placeholder="Jane Smith" autoComplete="name" />
              </Form.Item>

              <Form.Item
                label="Business Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your business email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input size="large" placeholder="jane@company.com" autoComplete="email" />
              </Form.Item>

              <Form.Item
                label="Company Name"
                name="company"
                rules={[{ required: true, message: "Please enter your company name" }]}
              >
                <Input size="large" placeholder="Acme Pty Ltd" autoComplete="organization" />
              </Form.Item>

              <Form.Item label="Phone (optional)" name="phone">
                <Input size="large" placeholder="+61 4xx xxx xxx" inputMode="tel" autoComplete="tel" />
              </Form.Item>

              <Form.Item label="Message / Enquiry" name="message">
                <Input.TextArea
                  rows={4}
                  showCount
                  maxLength={800}
                  placeholder="Tell us about your needs, e.g., CyberPower models, runtime, installation, or SLA."
                />
              </Form.Item>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="cp-hero__cta"
            >
              Send Enquiry
            </Button>

            <div className="cp-hero__footnote">
              Our team will contact you within one business day.
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}