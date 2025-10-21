import React from "react";
import "../styles/green-revolution.css";
import energySaving from "../assets/energy1.webp";
import energyStar from "../assets/energy2.webp";

export default function GreenRevolution() {
  return (
    <section className="green-section">
      <div className="green-container">
        {/* LEFT CONTENT */}
        <div className="green-left">
          <h2>
            Leading the <span>Green Revolution</span>
          </h2>
          <p className="lead">
            <strong>Empowering a Sustainable Future</strong> — As climate awareness grows,
            individuals and businesses are taking responsibility to reduce carbon footprints.
            Through innovation and commitment, <strong>CyberPower</strong> supports
            eco-conscious solutions that protect technology and our planet.
          </p>

          <p className="desc">
            From energy-efficient UPS designs to smarter power management,
            our goal is to help every organization transition towards greener IT infrastructure.
            Together, we can power a cleaner, brighter tomorrow.
          </p>

          <button className="green-btn">Join the Movement</button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="green-right">
          <div className="green-card">
            <img src={energySaving} alt="Energy Saving Technology" loading="lazy" />
            <p>
              Using our patented <strong>GreenPower UPS™</strong> technology,
              customers can reduce energy use by up to <strong>93%</strong>,
              lowering operational costs while protecting valuable equipment.
            </p>
          </div>

          <div className="green-card">
            <img src={energyStar} alt="Energy Star Certified" loading="lazy" />
            <p>
              Our <strong>Energy Star® Certified</strong> products ensure efficiency
              without compromise — cutting up to <strong>55%</strong> of UPS energy consumption
              while maintaining peak performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
