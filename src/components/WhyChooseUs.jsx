import React, { useEffect, useRef } from "react";
import { Card, Button, Row, Col } from "antd";
import {
  TrophyOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
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
  const wrapRef = useRef(null);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle("is-visible", e.isIntersecting)),
      { threshold: 0.15 }
    );
    wrapRef.current?.querySelectorAll(".whyblue__card").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="whyblue" id="why-bluechip">
      <div className="whyblue__container" ref={wrapRef}>
        <header className="whyblue__head">
          <h2>
            Why Choose <span className="brand">Bluechip</span> as Your CyberPower Distributor
          </h2>
          <p>
            Trusted by resellers and MSPs across Australia for reliable CyberPower solutions,
            expert support, and award-winning service.
          </p>
        </header>

        <Row gutter={[24, 24]} className="whyblue__grid">
          {features.map((f, i) => (
            <Col xs={24} sm={12} lg={6} key={i}>
              <Card className="whyblue__card" bordered={false} style={{ animationDelay: `${i * 70}ms` }}>
                <div className="whyblue__icon">{f.icon}</div>
                <h3 className="whyblue__title">{f.title}</h3>
                <p className="whyblue__desc">{f.desc}</p>

                {/* subtle divider + bottom affordance */}
                <div className="whyblue__foot">
                  <span className="whyblue__dot" />
                  <span className="whyblue__dot" />
                  <span className="whyblue__dot" />
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="whyblue__cta">
         
        </div>
      </div>
    </section>
  );
}
