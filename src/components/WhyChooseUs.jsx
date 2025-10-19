import React from "react";
import { Card, Row, Col, Button } from "antd";
import {
  TrophyOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import "../styles/why.css";

const features = [
  {
    icon: <TrophyOutlined />,
    title: "Distributor of the Year (2020–2024)",
    desc: "Recognised by CyberPower for five consecutive years of channel excellence and partner growth.",
  },
  {
    icon: <DollarOutlined />,
    title: "Competitive Partner Pricing",
    desc: "Access exclusive CyberPower partner rates and bundled offers that maximise your margins.",
  },
  {
    icon: <ThunderboltOutlined />,
    title: "Fast Local Delivery",
    desc: "Fortnightly container arrivals keep CyberPower products in stock and ready for fast Australia-wide shipping.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Local Warranty & Advanced Replacement",
    desc: "Up to 3-year warranty and 2-year advanced replacement on CyberPower UPS lines — fully backed by local support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="whyblue" id="why-bluechip">
      <div className="whyblue__container">
        <header className="whyblue__head">
          <h2>
            Why Choose <span className="brand">Bluechip</span> as Your CyberPower Distributor
          </h2>
          <p>
            Trusted by resellers and MSPs across Australia for reliable CyberPower solutions,
            expert support, and award-winning service.
          </p>
        </header>

        <Row gutter={[20, 20]} className="whyblue__grid">
          {features.map((f, i) => (
            <Col xs={24} md={12} key={i}>
              <Card className="whyblue__card" bordered={false}>
                <div className="whyblue__icon">{f.icon}</div>
                <div className="whyblue__content">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="whyblue__cta">
          <Button type="primary" shape="round" size="large" className="btn-red">
            Partner with Bluechip
          </Button>
          <Button type="text" className="link-muted">
            View CyberPower Product Lines
          </Button>
        </div>
      </div>
    </section>
  );
}
