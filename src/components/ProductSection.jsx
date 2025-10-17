import React, { useMemo, useState, memo } from "react";
import { Tabs, Button, Tag } from "antd";
import { LeftOutlined, RightOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import "./../styles/product.css";

/* —— your existing image imports —— */
import pfc1 from "../assets/ups.jpg";
import pfc2 from "../assets/ups2.png";
import pfc3 from "../assets/ups3.png";

import du1 from "../assets/ats1.jpeg";
import du2 from "../assets/ats2.jpg";
import du3 from "../assets/ats3.png";

import pro1 from "../assets/proups1.webp";
import pro2 from "../assets/proups2.jpg";
import pro3 from "../assets/proups3.webp";

/* Data */
const PRODUCTS = {
  pfc: {
    tab: "PFC Sinewave UPS",
    title: "PFC Sinewave UPS",
    subtitle: "Pure sinewave output for sensitive loads, workstations, and servers.",
    bullets: [
      "Pure sinewave for active PFC PSUs",
      "High efficiency, low noise",
      "Fast transfer time & surge protection",
    ],
    badges: ["Line-Interactive", "Rack / Tower", "Pure Sinewave"],
    images: [pfc1, pfc2, pfc3],
  },
  duats: {
    tab: "DU & ATS",
    title: "DU & ATS",
    subtitle: "Redundant power path with seamless source switching.",
    bullets: ["Dual-input redundancy", "Rack distribution", "Monitoring & events"],
    badges: ["Redundant", "Rackmount", "Monitoring"],
    images: [du1, du2, du3],
  },
  pro: {
    tab: "CyberPower Professional Series UPS",
    title: "CyberPower Professional Series UPS",
    subtitle: "Enterprise-grade protection with scalable runtime.",
    bullets: ["Line-interactive / Online", "ABM battery care", "External battery packs"],
    badges: ["Enterprise", "Scalable", "High Reliability"],
    images: [pro1, pro2, pro3],
  },
};

/* Minimal gallery (no carousels, no heavy refs) */
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
        {images.map((src, idx) => (
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

const ProductBlock = memo(({ p }) => (
  <div className="p-row">
    <div className="p-left">
      <h2 className="p-title">{p.title}</h2>
      <p className="p-sub">{p.subtitle}</p>

      <ul className="p-list">
        {p.bullets.map((b, i) => (
          <li key={i}>
            <CheckCircleTwoTone twoToneColor="#1f4ed8" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="p-tags">
        {p.badges.map((b, i) => (
          <Tag key={i} color="blue">
            {b}
          </Tag>
        ))}
      </div>

      <div className="p-ctas">
        <Button type="primary" shape="round" className="btn-primary">
          Explore
        </Button>
        <Button type="text" className="btn-text">
          Talk to Sales
        </Button>
      </div>
    </div>

    <div className="p-right">
      <Gallery images={p.images} />
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
          <h1>Our Product Range</h1>
          <p>Reliable power solutions for modern infrastructure.</p>
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
