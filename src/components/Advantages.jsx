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
    desc: "Cyberpower is Recognised by Frost & Sullivan for leadership in UPS innovation, quality, and sales performance.",
  },
  {
    icon: <BuildOutlined />,
    title: "Original Manufacturer with Dedicated R&D",
    desc: "End-to-end design and production ensure consistent quality, reliability, and faster innovation cycle.",
  },
  {
    icon: <ApiOutlined />,
    title: "Australian-Compliant Products",
    desc: "CyberPower systems are built to meet Australian standards, simplifying deployment and customer satisfaction.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Up to 3-year warranty",
    desc: "Extended local warranty and advanced replacement on select models — less downtime for your customers.",
  },
  {
    icon: <DesktopOutlined />,
    title: "Free Power Management Software",
    desc: "Integrated software suite for real-time monitoring, remote control, and energy management.",
  },
  {
    icon: <ToolOutlined />,
    title: "Free Unlimited Technical Support",
    desc: "Access to Bluechip's local CyberPower specialists for configuration, setup, and troubleshooting.",
  },
];

export default function Advantages() {
  const rootRef = useRef(null);

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
          <h2 id="adv-title">
            Key Competitive <span>Advantages</span>
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
