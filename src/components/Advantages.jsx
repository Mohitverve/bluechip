import React, { useEffect, useRef } from "react";
import {
  TrophyOutlined,
  BuildOutlined,
  ApiOutlined,
  SafetyCertificateOutlined,
  DesktopOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import "../styles/advantages.css";

const items = [
  {
    icon: <TrophyOutlined />,
    title: "UPS Brand Worldwide",
    desc:
      "Cyberpower is Recognised by Frost & Sullivan for leadership in UPS innovation, quality, and sales performance.",
    
  },
  {
    icon: <BuildOutlined />,
    title: "Original Manufacturer with Dedicated R&D",
    desc:
      "End-to-end design and production ensure consistent quality, reliability, and faster innovation cycle.",
    bullets: [
      "In-house firmware, batteries, & mechanics",
      "Iterates quickly on partner feedback",
    ],
  },
  {
    icon: <ApiOutlined />,
    title: "Australian-Compliant Products",
    desc:
      "CyberPower systems are built to meet Australian standards, simplifying deployment and customer satisfaction.",
    bullets: [
      "Meets local safety & EMC standards",
      "Documentation tailored for AU",
    ],
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Up to 3-year warranty",
    desc:
      "Extended local warranty and advanced replacement on select models — less downtime for your customers.",
    bullets: [
      "2-year advanced replacement options",
      "Simple RMA workflow via distributor",
    ],
  },
  {
    icon: <DesktopOutlined />,
    title: " Free Power Management Software",
    desc:
      "Integrated software suite for real-time monitoring, remote control, and energy management.",
    bullets: [
      "Multi-OS agents & SNMP support",
      "APIs / logs for integrations",
    ],
  },
  {
    icon: <ToolOutlined />,
    title: "Free Unlimited Technical Support",
    desc:
      "Access to Bluechip’s local CyberPower specialists for configuration, setup, and troubleshooting.",
    bullets: [
      "Sizing, topology & runtime advice",
      "Fast escalation paths when needed",
    ],
  },
];

export default function Advantages() {
  const rootRef = useRef(null);

  // simple reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("is-visible", e.isIntersecting)
        ),
      { threshold: 0.18 }
    );
    rootRef.current
      ?.querySelectorAll(".adv__card")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="adv" aria-labelledby="adv-title" ref={rootRef}>
      <div className="adv__wrap">
        <header className="adv__head">
          <span className="adv__kicker">CyberPower advantage</span>
          <h2 id="adv-title">
           Key Competitive  <span>Advantages</span>.
          </h2>
          <p>
            Why partners choose CyberPower — performance, reliability, and dedicated support that help resellers deliver more value to their customers.
          </p>
        </header>

        <div className="adv__grid" role="list">
          {items.map((it, i) => (
            <article
              key={i}
              role="listitem"
              className="adv__card"
              style={{ animationDelay: `${80 * (i + 1)}ms` }}
            >
              <div className="adv__icon">{it.icon}</div>
              <h3 className="adv__title">{it.title}</h3>
              <p className="adv__desc">{it.desc}</p>

            
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
