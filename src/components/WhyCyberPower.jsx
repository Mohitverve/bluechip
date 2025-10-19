import React, { useEffect, useRef } from "react";
import {
  BulbOutlined,
  ThunderboltOutlined,
  DeploymentUnitOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import "../styles/why-cyberpower.css";

/** Bento grid “Why CyberPower?” section
 *  Props:
 *    - videoId: YouTube id (default demo)
 */
export default function WhyCyberPower({ videoId = "dQw4w9WgXcQ" }) {
  const rootRef = useRef(null);

  // simple reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle("is-visible", e.isIntersecting)),
      { threshold: 0.18 }
    );
    rootRef.current?.querySelectorAll(".wb__tile").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="wb" aria-labelledby="wb-title" ref={rootRef}>
      <div className="wb__grid">

        {/* Lead tile (copy) */}
        <article className="wb__tile wb__lead" aria-labelledby="wb-title">
          <span className="wb__kicker">Why CyberPower?</span>
          <h2 id="wb-title">
            Why <span>CyberPower?</span> 
          </h2>
          <p className="wb__leadcopy">
           With over 25 years of innovation, CyberPower has become a global leader in power protection — trusted by IT professionals, data centers, and managed service providers worldwide. Our solutions combine efficiency, reliability, and sustainability, helping partners deliver dependable uptime to every customer.


          </p>
        </article>

        {/* Video tile */}
        <aside className="wb__tile wb__video" aria-label="CyberPower overview video">
          <div className="wb__frame">
            <iframe
              title="CyberPower Overview"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <small className="wb__caption">
            Watch: CyberPower innovation in power protection and energy efficiency.
          </small>
        </aside>
<div className="wb__features">
  <article className="wb__feat">
    <i className="wb__icon"><BulbOutlined /></i>
    <h3>Professional Power Solutions</h3>
    <p>Complete portfolio of UPS systems, PDUs, and power accessories designed for business-critical applications.
</p>
  </article>

  <article className="wb__feat">
    <i className="wb__icon"><ThunderboltOutlined /></i>
    <h3>GreenPower UPS™ Technology</h3>
    <p>Energy-efficient architecture that reduces power consumption while maintaining full protection.
</p>
  </article>

  <article className="wb__feat">
    <i className="wb__icon"><DeploymentUnitOutlined /></i>
    <h3>100+ Countries Market Presence
</h3>
    <p>A globally recognized brand with proven reliability and strong local distribution through Bluechip IT.
</p>
  </article>

  {/* <article className="wb__feat">
    <i className="wb__icon"><GlobalOutlined /></i>
    <h3>100+ Countries Market Presence</h3>
    <p>Global availability with localised support and award-winning reliability.</p>
  </article> */}
</div>

      </div>
    </section>
  );
}
