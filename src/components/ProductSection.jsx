import React, { useMemo, useState, memo, useEffect } from "react";
import { Tabs, Button, Tag } from "antd";
import { LeftOutlined, RightOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import "./../styles/product.css";

/* Images */
import pfc1 from "../assets/ups1.webp";
import pfc2 from "../assets/ups2.webp";
import pfc3 from "../assets/ups3.webp";

import du1 from "../assets/ats1.webp";
import du2 from "../assets/ats2.webp";
import du3 from "../assets/ats3.webp";

import pro1 from "../assets/proups1.webp";
import pro2 from "../assets/proups2.webp";
import pro3 from "../assets/proups3.webp";

/* Product Data */
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

/* FIXED: Optimized Gallery Component with proper accessibility */
const Gallery = memo(({ images, productName = "product" }) => {
  const [i, setI] = useState(0);
  const total = images.length;
  const [loaded, setLoaded] = useState(false);

  const next = () => setI((v) => (v + 1) % total);
  const prev = () => setI((v) => (v - 1 + total) % total);

  useEffect(() => {
    setLoaded(false);

    // Preload next image in background
    const nextIndex = (i + 1) % total;
    const preload = new Image();
    preload.src = images[nextIndex];
  }, [i, total, images]);

  // Preload first image eagerly
  useEffect(() => {
    const first = new Image();
    first.src = images[0];
  }, [images]);

  return (
    <div className="g-wrap" role="region" aria-label={`${productName} image gallery`}>
      <div className="g-main">
        {/* FIXED: Added proper aria-label with context */}
        <button 
          className="g-nav g-left" 
          aria-label={`Previous ${productName} image (${i + 1} of ${total})`}
          onClick={prev}
          type="button"
        >
          <LeftOutlined aria-hidden="true" />
        </button>

        <div className={`g-aspect ${loaded ? "is-loaded" : ""}`}>
          <div
            className="g-blur"
            style={{ backgroundImage: `url(${images[i]})` }}
            aria-hidden="true"
          />
          <img
            key={i}
            src={images[i]}
            alt={`${productName} view ${i + 1} of ${total}`}
            className="g-img"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={i === 0 ? "high" : "auto"}
            width="640"
            height="420"
            onLoad={() => setLoaded(true)}
          />
        </div>

        {/* FIXED: Added proper aria-label with context */}
        <button 
          className="g-nav g-right" 
          aria-label={`Next ${productName} image (${i + 1} of ${total})`}
          onClick={next}
          type="button"
        >
          <RightOutlined aria-hidden="true" />
        </button>
      </div>

      {/* FIXED: Added accessible labels to dot navigation */}
      <div className="g-dots" role="tablist" aria-label="Image selector">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`g-dot ${idx === i ? "is-active" : ""}`}
            role="tab"
            aria-label={`View ${productName} image ${idx + 1}`}
            aria-selected={idx === i}
            type="button"
          />
        ))}
      </div>
    </div>
  );
});

Gallery.displayName = "Gallery";

/* FIXED: Product Block with proper heading hierarchy */
const ProductBlock = memo(({ p }) => (
  <div className="p-row">
    <div className="p-media">
      <Gallery images={p.images} productName={p.title} />
    </div>

    <div className="p-info">
      {/* FIXED: Changed from h2 to h3 since parent section has h1 */}
      <h3 className="p-title">{p.title}</h3>
      <p className="p-sub">{p.subtitle}</p>

      <ul className="p-list">
        {p.bullets.map((b, i) => (
          <li key={i} style={{ animationDelay: `${80 * (i + 1)}ms` }}>
            <CheckCircleTwoTone twoToneColor="#e53935" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="p-tags" role="list" aria-label="Product features">
        {p.badges.map((b, i) => (
          <Tag key={i} className="tag-pill" role="listitem">
            {b}
          </Tag>
        ))}
      </div>

      <div className="p-ctas">
        <Button 
          type="text" 
          shape="round" 
          className="btn-text"
          aria-label={`View ${p.title} series details`}
        >
          View Series
        </Button>
        <Button 
          type="primary" 
          className="btn-primary"
          aria-label={`Request partner pricing for ${p.title}`}
          onClick={() =>
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          }
        >
          Partner Pricing
        </Button>
      </div>
    </div>
  </div>
));

ProductBlock.displayName = "ProductBlock";

/* FIXED: Section with proper structure and ID for navigation */
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
    <section className="section" id="products-section" aria-labelledby="products-heading">
      <div className="container">
        <header className="head">
          {/* FIXED: Added id for aria-labelledby */}
          <h2 id="products-heading">CyberPower Product Lineup</h2>
          <p>
            Explore our most popular CyberPower UPS and power distribution systems —
            designed for every business need, available through Bluechip IT.
          </p>
        </header>

        <Tabs
          activeKey={active}
          onChange={setActive}
          items={items}
          className="tabs"
          animated
          destroyInactiveTabPane
          aria-label="Product categories"
        />
      </div>
    </section>
  );
}