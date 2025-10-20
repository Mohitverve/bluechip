import React, { useEffect, useRef } from "react";
import {
  BulbOutlined,
  ThunderboltOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import "../styles/why-cyberpower.css";

/** Bento grid “Why CyberPower?” section */
export default function WhyCyberPower({ videoId = "nyRfVWiwiAs" }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("is-visible", e.isIntersecting)
        ),
      { threshold: 0.18 }
    );
    rootRef.current?.querySelectorAll(".wb__tile").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="wb" aria-labelledby="wb-title" ref={rootRef}>
      <div className="wb__grid">
        {/* Lead tile (copy + bullets) */}
        <article className="wb__tile wb__lead" aria-labelledby="wb-title">
          <h2 id="wb-title">
            Why <span>CyberPower?</span>
          </h2>

          <p className="wb__leadcopy">
            With over 25 years of innovation, CyberPower has become a global leader
            in power protection — trusted by IT professionals, data centers, and
            managed service providers worldwide. Our solutions combine efficiency,
            reliability, and sustainability, helping partners deliver dependable
            uptime to every customer.
          </p>

          {/* NEW: bullets inside the lead card */}
          <ul className="wb__list" role="list">
            <li className="wb__listitem">
              <i className="wb__bulletIcon"><BulbOutlined /></i>
              <div>
                <h4>Professional Power Solutions</h4>
                <p>
                  Complete portfolio of UPS systems, PDUs, and power accessories
                  for business-critical applications.
                </p>
              </div>
            </li>

            <li className="wb__listitem">
              <i className="wb__bulletIcon"><ThunderboltOutlined /></i>
              <div>
                <h4>GreenPower UPS™ Technology</h4>
                <p>
                  Energy-efficient architecture that reduces power consumption
                  while maintaining full protection.
                </p>
              </div>
            </li>

            <li className="wb__listitem">
              <i className="wb__bulletIcon"><DeploymentUnitOutlined /></i>
              <div>
                <h4>100+ Countries Market Presence</h4>
                <p>
                  A globally recognized brand with proven reliability and strong
                  local distribution through Bluechip IT.
                </p>
              </div>
            </li>
          </ul>
        </article>

        {/* Video tile */}
        <aside className="wb__tile wb__video" aria-label="CyberPower overview video">
          <div className="wb__frame">
            <iframe
              title="CyberPower Overview"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <small className="wb__caption">
            Watch: CyberPower innovation in power protection and energy efficiency.
          </small>
        </aside>
      </div>
    </section>
  );
}
