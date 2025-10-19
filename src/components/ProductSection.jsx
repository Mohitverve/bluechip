import React, { useMemo, useState, memo } from "react";
import { Tabs, Button, Tag } from "antd";
import { LeftOutlined, RightOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import "./../styles/product.css";

/* Images */
import pfc1 from "../assets/ups.jpg";
import pfc2 from "../assets/ups2.png";
import pfc3 from "../assets/ups3.png";

import du1 from "../assets/ats1.png";
import du2 from "../assets/ats2.jpg";
import du3 from "../assets/ats3.png";

import pro1 from "../assets/proups1.webp";
import pro2 from "../assets/proups2.jpg";
import pro3 from "../assets/proups3.webp";

/* Data */
const PRODUCTS = {
  pfc: {
    tab: "PFC SineWave Series",
    title: "PFC Sinewave UPS",
    subtitle: "Pure sinewave output for sensitive loads, workstations, and servers.",
    bullets: [
     "True sinewave output ensures stable and safe operation for sensitive electronics",

"Automatic Voltage Regulation (AVR) delivers consistent power during fluctuations",

"Intuitive LCD panel provides real-time system status and load information",

"Energy-efficient design minimizes power consumption and operating costs",
    ],
    badges: ["Line-Interactive", "Rack / Tower", "Pure Sinewave"],
    images: [pfc1, pfc2, pfc3],
  },
  duats: {
    tab: "PDU & ATS",
    title: "PDU & ATS",
    subtitle: "Redundant power path with seamless source switching.",
    bullets: [
      "Wide range of rackmount PDUs and ATS solutions, including metered, switched, and managed models",

"Ideal for server racks, data centers, and mission-critical infrastructure",

"Backed by expert technical support, fast Australia-wide delivery, and competitive pricing",

"Designed for reliable, scalable, and efficient power distribution in IT environments",
    
    
    ],
    badges: ["Redundant", "Rackmount", "Monitoring"],
    images: [du1, du2, du3],
  },
  pro: {
    tab: "CyberPower Professional Series UPS",
    title: "CyberPower Professional Series UPS",
    subtitle: "Enterprise-grade protection with scalable runtime.",
    bullets: [
      
    "Business-grade line-interactive UPS engineered for servers, networking, and telecom systems",

"Features Automatic Voltage Regulation (AVR) to handle power fluctuations effectively",

"Integrates GreenPower UPS™ technology for higher efficiency and longer battery life",

"Offers LCD status display, data line protection, and advanced management software for full control",
    
    
    ],
    badges: ["Enterprise", "Scalable", "High Reliability"],
    images: [pro1, pro2, pro3],
  },
};

/* Minimal gallery */
const Gallery = memo(({ images }) => {
  const [i, setI] = useState(0);
  const total = images.length;
  const next = () => setI((v) => (v + 1) % total);
  const prev = () => setI((v) => (v - 1 + total) % total);

  return (
    <div className="g-wrap">
      <div className="g-main">
        <button className="g-nav g-left" aria-label="Previous image" onClick={prev}>
          <LeftOutlined />
        </button>

        <img
          key={i}
          src={images[i]}
          alt={`product ${i + 1}`}
          className="g-img fade"
          loading="lazy"
          decoding="async"
          width="640"
          height="420"
          sizes="(max-width: 1024px) 100vw, 560px"
        />

        <button className="g-nav g-right" aria-label="Next image" onClick={next}>
          <RightOutlined />
        </button>
      </div>

      <div className="g-dots" role="tablist" aria-label="Image selector">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`g-dot ${idx === i ? "is-active" : ""}`}
            aria-label={`Show image ${idx + 1}`}
            aria-selected={idx === i}
          />
        ))}
      </div>
    </div>
  );
});

/* Product block — image left, info right */
const ProductBlock = memo(({ p }) => (
  <div className="p-row">
    {/* LEFT: images */}
    <div className="p-media">
      <Gallery images={p.images} />
    </div>

    {/* RIGHT: info */}
    <div className="p-info">
      <h2 className="p-title">{p.title}</h2>
      <p className="p-sub">{p.subtitle}</p>

      <ul className="p-list">
        {p.bullets.map((b, i) => (
          <li key={i} style={{ animationDelay: `${80 * (i + 1)}ms` }}>
            <CheckCircleTwoTone twoToneColor="#e53935" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="p-tags">
        {p.badges.map((b, i) => (
          <Tag key={i} className="tag-pill">
            {b}
          </Tag>
        ))}
      </div>

      <div className="p-ctas">
        <Button type="text" shape="round" className="btn-text">
          View Series
        </Button>
        <Button type="primary" className="btn-primary">
          Partner Pricing
        </Button>
      </div>
    </div>
  </div>
));

export default function ProductSection() {
  const [active, setActive] = useState("pfc");

  const items = useMemo(
    () =>
      Object.entries(PRODUCTS).map(([k, p]) => ({
        key: k,
        label: p.tab,
        children: <ProductBlock p={p} />,
      })),
    []
  );

  return (
    <section className="section">
      <div className="container">
        <header className="head">
          <h1>CyberPower Product Lineup</h1>
          <p>Explore our most popular CyberPower UPS and power distribution systems — designed for every business need, available through Bluechip IT.
</p>
        </header>

        <Tabs
          activeKey={active}
          onChange={setActive}
          items={items}
          className="tabs"
          animated
          destroyInactiveTabPane
        />
      </div>
    </section>
  );
}
