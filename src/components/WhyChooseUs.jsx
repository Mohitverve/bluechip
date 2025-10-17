import React from "react";
import { Button, Card, Row, Col, Tag } from "antd";
import {
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  CustomerServiceOutlined,
  CloudServerOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import "./../styles/why.css";

const features = [
  {
    icon: <SafetyCertificateOutlined />,
    title: "Enterprise-grade security",
    desc: "Modern controls, audits, and compliance baked in from day one.",
    bullets: ["ISO/IEC-aligned processes", "Proactive vulnerability scanning", "Hardened configurations"],
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Performance & uptime",
    desc: "Power solutions designed for reliability under real workloads.",
    bullets: ["High-efficiency designs", "Fast transfer time", "Redundant architectures"],
  },
  {
    icon: <CustomerServiceOutlined />,
    title: "Expert support",
    desc: "Certified engineers and responsive SLAs—no runaround.",
    bullets: ["Solution architects on call", "Clear escalation paths", "24×7 assistance options"],
  },
];

const stats = [
  { k: "99.99%", v: "Power availability" },
  { k: "1,200+", v: "Deployments" },
  { k: "30 min", v: "Avg. response" },
  { k: "25+", v: "Cities served" },
];

const WhyChooseUs = () => {
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="why__container">
        <header className="why__head">
          <span className="why__kicker" aria-hidden="true">
            <span className="dot" /> Why choose us
          </span>
          <h2 id="why-title">Why choose <span className="brand">Bluechip</span></h2>
          <p>
            Reliable power solutions, measurable outcomes, and responsive support—engineered for modern infrastructure.
          </p>
        </header>

        <Row gutter={[16, 16]} className="why__stats" role="list">
          {stats.map((s, i) => (
            <Col xs={12} md={6} key={i} role="listitem">
              <div className="stat">
                <div className="stat__k">{s.k}</div>
                <div className="stat__v">{s.v}</div>
              </div>
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]} className="why__grid">
          {features.map((f, idx) => (
            <Col xs={24} md={8} key={idx}>
              <Card className="why__card" bordered>
                <div className="why__icon" aria-hidden="true">{f.icon}</div>
                <h3 className="why__title">{f.title}</h3>
                <p className="why__desc">{f.desc}</p>
                <ul className="why__list">
                  {f.bullets.map((b, i) => (
                    <li key={i}>
                      <CheckCircleTwoTone twoToneColor="#e53935" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="why__band" role="group" aria-label="Get help">
          <div className="why__band-left">
            <CloudServerOutlined className="why__band-icon" />
            <div>
              <h4>Ready to boost reliability?</h4>
              <p className="why__band-sub">
                Talk to our engineers and get a tailored power plan for your environment.
              </p>
            </div>
          </div>
          <div className="why__band-right">
            <Button type="primary" shape="round" size="large" className="btn-red">
              Get a Consultation
            </Button>
            <Button type="text" className="link-muted">See customer stories</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
